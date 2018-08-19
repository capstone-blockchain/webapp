const app = require("express")()
const server = require("http").Server(app)

app.set("port", 5000)

app.get("/test", (req, res) => {
  res.status(200).json("ok")
})

server.listen(app.get("port"), "0.0.0.0", () => {
  if (process.env.NODE_ENV !== "production")
    console.log("Listening on port:", app.get("port"))
})
