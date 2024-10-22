import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    const { nome, email, telefone } = await req.json();

    try {
        // Configurar o transporte (SMTP)
        const transporter = nodemailer.createTransport({
            host: 'email-ssl.com.br',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER, // Seu email
                pass: process.env.EMAIL_PASS, // Sua senha
            },
        });

        // Configurar o e-mail
        const mailOptions = {
            from: process.env.EMAIL_USER, // Remetente (seu email)
            to: process.env.EMAIL_SEND, // Enviar para o próprio email (ou você pode alterar para outro destinatário)
            subject: `Novo contato de ${nome}`, // Assunto do email
            text: `Você recebeu um novo contato:\n\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`, // Corpo do email
            replyTo: email, // Definir o email do remetente como o endereço de resposta
        };

        // Enviar o e-mail
        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'E-mail enviado com sucesso!' });
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return NextResponse.json({ success: false, message: 'Erro ao enviar e-mail.' }, { status: 500 });
    }
}
