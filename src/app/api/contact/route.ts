import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, email, telephone, service, date, message } = body;

    // Basic validation
    if (!nom || !email || !service || !message) {
      return NextResponse.json(
        { error: "Les champs nom, email, service et message sont requis" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Format d'email invalide" },
        { status: 400 },
      );
    }

    // Log the submission (as in the original code)
    console.log("Contact form submission:", {
      nom,
      email,
      telephone,
      service,
      date,
      message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Implement actual email sending (e.g., using Resend or Nodemailer)

    return NextResponse.json({
      success: true,
      message:
        "Votre demande a été envoyée avec succès. Nous vous recontacterons rapidement !",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer.",
      },
      { status: 500 },
    );
  }
}
