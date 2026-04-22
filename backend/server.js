const express = require('express');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Headers de seguridad HTTP
app.use(helmet());

// CORS restringido
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  methods: ['POST'],
}));

app.use(express.json({ limit: '10kb' }));

// Rate limiting global para /api/
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10,
  message: 'Demasiadas solicitudes, intentá de nuevo en unos minutos.',
});
app.use('/api/', apiLimiter);

// Verificación de variables de entorno
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error("FALTAN CONFIGURACIONES EN EL ARCHIVO .ENV");
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// --- ENDPOINT: Distribuidores ---
app.post('/api/distributors', (req, res) => {
  const name = (req.body.name || '').trim().slice(0, 200);
  const email = (req.body.email || '').trim().slice(0, 200);
  const message = (req.body.message || '').trim().slice(0, 1000);

  if (!name || !email) {
    return res.status(400).send('Faltan campos obligatorios');
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send('Email inválido');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    replyTo: email,
    subject: `🚀 NUEVA SOLICITUD DISTRIBUIDOR: ${name}`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error("Error Nodemailer:", error);
      return res.status(500).send('Error interno del servidor');
    }
    res.status(200).send('OK');
  });
});

// --- ENDPOINT: Newsletter ---
app.post('/api/newsletter', (req, res) => {
  const email = (req.body.email || '').trim().slice(0, 200);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).send('Email inválido');
  }

  const filePath = path.join(__dirname, 'newsletter-subscribers.json');
  let subscribers = [];
  try {
    if (fs.existsSync(filePath)) {
      subscribers = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    }
  } catch { /* start fresh */ }

  const emailLower = email.toLowerCase();
  if (subscribers.some((s) => s.toLowerCase() === emailLower)) {
    return res.status(200).send('Ya estás suscripto');
  }

  subscribers.push(emailLower);
  fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2));

  // Notificación al admin
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `📩 NUEVO SUSCRIPTOR NEWSLETTER: ${email}`,
    text: `Nuevo email suscripto al newsletter: ${email}\nFecha: ${new Date().toISOString()}`
  };
  transporter.sendMail(mailOptions).catch(err => console.error('Newsletter mail error:', err));

  res.status(200).send('OK');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`✅ Servidor de 13Energy activo en puerto ${PORT}`);
});
