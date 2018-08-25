const app = require("express")()
const server = require("http").Server(app)
const Client = require("node-rest-client").Client
const mqtt = require("mqtt")
const topics = require("./mqtt-topics")

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
  mqttClient.subscribe(topics.NEW_BLOCK_ADDED)
})

mqttClient.on("message", async (topic, message) => {
  switch (topic) {
    case topics.NEW_BLOCK_ADDED:
      break
    default:
      break
  }
})

app.get("/blockchain", (req, res) => {
  mqttClient.subscribe(topics.BROADCAST_BLOCKCHAIN_WEBAPP)
  mqttClient.publish(topics.REQUEST_BLOCKCHAIN_WEBAPP, "")

  mqttClient.on("message", async (topic, message) => {
    switch (topic) {
      case topics.BROADCAST_BLOCKCHAIN_WEBAPP:
        mqttClient.unsubscribe(topics.BROADCAST_BLOCKCHAIN_WEBAPP)
        res.json(JSON.parse(message.toString()))
    }
  })
})

server.listen(app.get("port"), "0.0.0.0", () => {
  if (process.env.NODE_ENV !== "production")
    console.log("Listening on port:", app.get("port"))
})
