import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      nom, prenom, email, telephone, message,
      entreprise, secteur, solution, phase,
      emplacement, largeur, hauteur, ville,
      timing, budget
    } = body;

    if (!nom || !prenom || !email || !telephone) {
      return NextResponse.json(
        { error: "Les informations de contact (Nom, Prénom, Email, Téléphone) sont requises." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "NeoFilm LED <onboarding@resend.dev>", // TODO: remplacer par noreply@neofilmled.fr après vérification du domaine sur Resend
      to: ["neofilmled@gmail.com"],
      replyTo: email,
      subject: `Nouveau Projet - ${entreprise || "Particulier"} - ${solution || "Non précisé"}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #ffffff; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #CB52EE, #00D8FF); padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 22px; letter-spacing: 2px;">NOUVEAU PROJET</h1>
            <p style="margin: 8px 0 0; opacity: 0.9; font-size: 14px;">Via le formulaire neofilmled.fr</p>
          </div>

          <div style="padding: 24px;">
            <h2 style="color: #00D8FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; padding-bottom: 8px;">Identité & Contact</h2>
            <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
              <tr><td style="color: #888; padding: 6px 0; width: 140px;">Nom complet</td><td style="color: #fff;">${prenom} ${nom}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">E-mail</td><td style="color: #fff;"><a href="mailto:${email}" style="color: #00D8FF;">${email}</a></td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Téléphone</td><td style="color: #fff;"><a href="tel:${telephone}" style="color: #00D8FF;">${telephone}</a></td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Entreprise</td><td style="color: #fff;">${entreprise || "N/A"}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Secteur</td><td style="color: #fff;">${secteur || "N/A"}</td></tr>
            </table>

            <h2 style="color: #CB52EE; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; padding-bottom: 8px;">Détails du Projet</h2>
            <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
              <tr><td style="color: #888; padding: 6px 0; width: 140px;">Solution</td><td style="color: #fff;">${solution || "N/A"}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Phase</td><td style="color: #fff;">${phase || "N/A"}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Emplacement</td><td style="color: #fff;">${emplacement || "N/A"}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Ville</td><td style="color: #fff;">${ville || "N/A"}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Dimensions</td><td style="color: #fff;">${largeur || "?"}m x ${hauteur || "?"}m</td></tr>
            </table>

            <h2 style="color: #00D8FF; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; padding-bottom: 8px;">Logistique & Budget</h2>
            <table style="width: 100%; font-size: 14px; margin-bottom: 20px;">
              <tr><td style="color: #888; padding: 6px 0; width: 140px;">Timing</td><td style="color: #fff;">${timing || "Non précisé"}</td></tr>
              <tr><td style="color: #888; padding: 6px 0;">Budget</td><td style="color: #fff;">${budget || "Non précisé"}</td></tr>
            </table>

            ${message ? `
            <h2 style="color: #CB52EE; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #222; padding-bottom: 8px;">Message</h2>
            <p style="color: #ccc; font-size: 14px; line-height: 1.6; background: #111; padding: 16px; border-radius: 8px;">${message}</p>
            ` : ""}
          </div>

          <div style="background: #111; padding: 16px; text-align: center; font-size: 12px; color: #666;">
            NeoFilm LED - Formulaire de contact
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Votre message a été envoyé avec succès !",
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail :", error);
    const errorMessage = (error as Error).message || "Erreur interne du serveur";
    return NextResponse.json(
      { error: `Une erreur est survenue : ${errorMessage}` },
      { status: 500 }
    );
  }
}
