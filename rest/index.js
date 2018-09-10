/////////// INLUDE LIB ///////////
const app = require("express")()
const server = require("http").Server(app)
const bodyParser = require("body-parser")
const mqtt = require("mqtt")
const topics = require("./mqtt-topics")
const socket = require("socket.io")(server)
/////////// INLUDE LIB ///////////

/////////// GLOBAL VARIABLES ///////////
global.mqttClient = mqtt.connect(`mqtt://${process.env.MQTT_BROKER_IP}`)
global.latestBlock = {}
/////////// GLOBAL VARIABLES ///////////

app.set("port", 5000)
app.options("*", require("cors")())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
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

app.post("/block", (req, res) => {
  const block = req.body
  block.index = parseInt(block.index)

  socket.emit("newBlock", block)
  res.status(200).json("success")
})

server.listen(app.get("port"), "0.0.0.0", () => {
  if (process.env.NODE_ENV !== "production")
    console.log("Listening on port:", app.get("port"))
})
