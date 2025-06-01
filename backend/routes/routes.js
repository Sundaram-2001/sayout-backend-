import express from "express";
import { addData, getMessages } from "../db/db.js"; 

const routes = express.Router();

routes.use(express.json());

routes.post("/message", async (req, res) => {
  const { message } = req.body;
  console.log("Received message:", message);

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const result = await addData(message);

  if (result.success) {
    return res.status(200).json({ message: "Message inserted successfully" });
  } else {
    return res.status(500).json({ error: "Failed to insert message" });
  }
});

routes.get("/messages", async (req, res) => {
  const result = await getMessages();
  if (result.success) {
    const messages=result.data.map(item=>item.message)
    console.log("Fetched messages:", messages);
    return res.status(200).json(messages);
  } else {
    return res.status(500).json({ error: "Failed to fetch messages" });
  }
});

export default routes;
