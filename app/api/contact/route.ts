import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


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

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${nom} ${prenom}" <${email}>`,
      to: "neofilmled@gmail.com",
      subject: `Nouveau Projet - ${entreprise || "Particulier"} - ${solution || "Non précisé"}`,
      text: `
        NOUVEAU MESSAGE DEPUIS LE SITE WEB (FORMULAIRE DÉTAILLÉ)

        IDENTITÉ & CONTACT
        - Nom complet : ${nom} ${prenom}
        - E-mail : ${email}
        - Téléphone : ${telephone}
        - Entreprise : ${entreprise || "N/A"}
        - Secteur : ${secteur || "N/A"}

        DÉTAILS DU PROJET
        - Solution : ${solution || "N/A"}
        - Phase : ${phase || "N/A"}
        - Emplacement : ${emplacement || "N/A"}
        - Localisation : ${ville || "N/A"}
        - Dimensions : ${largeur || "?"}m x ${hauteur || "?"}m

        LOGISTIQUE & BUDGET
        - Timing : ${timing || "Non précisé"}
        - Budget : ${budget || "Non précisé"}

        MESSAGE COMPLÉMENTAIRE
        ${message || "Pas de message supplémentaire."}
      `,
    };

    await transporter.sendMail(mailOptions);

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
