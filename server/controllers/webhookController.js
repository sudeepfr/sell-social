import { clerkClient } from "@clerk/express";

export const handleClerkWebhook = async (req, res) => {
  try {
    const event = req.body;

    console.log("Webhook hit:", event.type); 

    if (
      event.type === "subscription.created" ||
      event.type === "subscription.updated"
    ) {
      const userId = event.data.user_id;

      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          plan: "premium",
        },
      });

      console.log("User upgraded to premium:", userId);
    }

    if (event.type === "subscription.deleted") {
      const userId = event.data.user_id;

      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          plan: "free",
        },
      });

      console.log("User downgraded:", userId);
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error("Webhook error:", error);
    res.status(500).json({ error: error.message });
  }
};