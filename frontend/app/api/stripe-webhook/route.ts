import { NextRequest, NextResponse } from "next/server";

// Mock Stripe webhook handler
// In production, replace with real Stripe secret key validation
export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  // Mock: log the event (real impl would verify signature with stripe.webhooks.constructEvent)
  console.log("[Stripe Webhook] Received event");
  console.log("[Stripe Webhook] Signature:", signature?.substring(0, 20) + "...");

  try {
    const event = JSON.parse(body);
    console.log("[Stripe Webhook] Event type:", event.type);

    switch (event.type) {
      case "checkout.session.completed":
        // Handle successful payment
        const session = event.data.object;
        console.log("[Stripe] New subscription for:", session.customer_email);
        // TODO: Update user subscription status in DB
        break;

      case "customer.subscription.deleted":
        // Handle cancellation
        console.log("[Stripe] Subscription cancelled");
        // TODO: Downgrade user to free tier
        break;

      case "invoice.payment_failed":
        // Handle failed payment
        console.log("[Stripe] Payment failed");
        // TODO: Send reminder email
        break;

      default:
        console.log("[Stripe] Unhandled event:", event.type);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[Stripe Webhook] Error:", err);
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 });
  }
}
