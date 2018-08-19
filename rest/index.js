const app = require("express")()
const server = require("http").Server(app)
const Client = require("node-rest-client").Client
const mqtt = require("mqtt")

global.mqttClient = mqtt.connect(`mqtt://${process.env.MQTT_BROKER_IP}`)
global.nodeIp = process.env.BLOCKCHAIN_NODE_IP

const client = new Client()

app.set("port", 5000)
app.options("*", require("cors")())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

mqttClient.on("connect", () => {
  mqttClient.subscribe("BROADCAST_BLOCKCHAIN")
})

app.get("/test", (req, res) => {
  client.get(`http://${global.nodeIp}:3000/blocks`, data => {
    mqttClient.publish("REQUEST_BLOCKCHAIN", "")
    mqttClient.on("message", async (topic, message) => {
      switch (topic) {
        case "BROADCAST_BLOCKCHAIN":
          res.json(JSON.parse(message.toString()))
          break
        default:
          res.json("nothing")
          break
      }
    })
  })
})

server.listen(app.get("port"), "0.0.0.0", () => {
  if (process.env.NODE_ENV !== "production")
    console.log("Listening on port:", app.get("port"))
})
