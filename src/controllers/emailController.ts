import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    // Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "f5b06bbe88d1ec",
          pass: "b682db90cc2160"
        }
      });

    // Passo 2: Configurar a mensagem
    let message ={
        from: 'nao-responda@b7web.com.br',
        to: 'Jefferson <jefferson@ig.com.br>',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }  

    // Passo 3: Enviar a mensagem
    let info = await transport.sendMail(message);

    console.log("INFO", info);

    res.json({success: true});
}