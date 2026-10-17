import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-memory + JSON file backup for service inquiries
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

if (!fs.existsSync(DATA_DIR)) {
  try {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  } catch (err) {
    console.warn('Could not create data directory, using memory only:', err);
  }
}

interface Inquiry {
  id: string;
  fullName: string;
  phone: string;
  serviceRequired: string;
  areaLocality: string;
  description: string;
  preferredDate?: string;
  createdAt: string;
  status: 'new' | 'reviewed';
}

let inMemoryInquiries: Inquiry[] = [];

function getInquiries(): Inquiry[] {
  try {
    if (fs.existsSync(INQUIRIES_FILE)) {
      const data = fs.readFileSync(INQUIRIES_FILE, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.warn('Error reading inquiries file, fallback to memory:', err);
  }
  return inMemoryInquiries;
}

function saveInquiry(inquiry: Inquiry) {
  inMemoryInquiries.unshift(inquiry);
  try {
    const list = getInquiries();
    list.unshift(inquiry);
    fs.writeFileSync(INQUIRIES_FILE, JSON.stringify(list, null, 2), 'utf-8');
  } catch (err) {
    console.warn('Error saving inquiry to disk:', err);
  }
}

// Service Inquiry API Endpoint
app.post('/api/inquiries', (req, res) => {
  const { fullName, phone, serviceRequired, areaLocality, description, preferredDate } = req.body || {};

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Please enter your full name (at least 2 characters).'
    });
  }

  // Validate phone: Pakistan phone numbers or general mobile numbers with at least 8 digits
  const cleanedPhone = typeof phone === 'string' ? phone.trim().replace(/[\s-]/g, '') : '';
  if (!cleanedPhone || cleanedPhone.length < 8) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a valid contact telephone number.'
    });
  }

  const validServices = [
    'AC Repair',
    'AC Installation',
    'AC Cleaning and Maintenance',
    'AC Inspection and Troubleshooting',
    'Commercial AC Inquiry',
    'Other Service Question'
  ];

  if (!serviceRequired || typeof serviceRequired !== 'string' || !validServices.includes(serviceRequired.trim())) {
    return res.status(400).json({
      success: false,
      error: 'Please choose an AC service category from the options.'
    });
  }

  if (!areaLocality || typeof areaLocality !== 'string' || areaLocality.trim().length < 2) {
    return res.status(400).json({
      success: false,
      error: 'Please specify your area or locality in Lahore.'
    });
  }

  if (!description || typeof description !== 'string' || description.trim().length < 5) {
    return res.status(400).json({
      success: false,
      error: 'Please provide a brief description of the issue or requirement (at least 5 characters).'
    });
  }

  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  const inquiryId = `SAIM-${Date.now().toString().slice(-6)}-${randomSuffix}`;

  const newInquiry: Inquiry = {
    id: inquiryId,
    fullName: fullName.trim(),
    phone: phone.trim(),
    serviceRequired: serviceRequired.trim(),
    areaLocality: areaLocality.trim(),
    description: description.trim(),
    preferredDate: preferredDate && typeof preferredDate === 'string' ? preferredDate.trim() : undefined,
    createdAt: new Date().toISOString(),
    status: 'new'
  };

  saveInquiry(newInquiry);

  return res.status(201).json({
    success: true,
    inquiryId: newInquiry.id,
    message: 'Your service inquiry has been received by SAIM AC Service.',
    details: {
      id: newInquiry.id,
      fullName: newInquiry.fullName,
      phone: newInquiry.phone,
      serviceRequired: newInquiry.serviceRequired,
      areaLocality: newInquiry.areaLocality,
      createdAt: newInquiry.createdAt
    }
  });
});

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'active',
    business: 'SAIM AC Service',
    phone: '+92 300 9622866',
    address: 'House #528/56B, Mian Fazal Haq Colony, Mujhid Road, Main Bazar, Ideal Garden Housing Scheme, Lahore, Punjab 54760, Pakistan'
  });
});

async function startServer() {
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`SAIM AC Service server running on port ${PORT}`);
  });
}

startServer();
