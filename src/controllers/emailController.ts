import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = (req: Request, res: Response) => {
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
    // Passo 3: Enviar a mensagem




    res.json({pong: true});
}