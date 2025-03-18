const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.post("/webhook", async (req, res) => {
    console.log("Received AvaCloud Data:", req.body);

    const discordWebhookURL = "YOUR_DISCORD_WEBHOOK_URL"; // Replace with your actual Discord Webhook

    try {
        await axios.post(discordWebhookURL, {
            content: `AvaCloud Event: ${JSON.stringify(req.body)}`,
        });
        res.status(200).send("Sent to Discord!");
    } catch (error) {
        console.error("Error sending to Discord:", error);
        res.status(500).send("Error forwarding webhook");
    }
});

app.listen(3000, () => console.log("Webhook server running on port 3000"));
