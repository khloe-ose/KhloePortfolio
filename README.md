# Khloe Cassandra Oseña | IT Portfolio

A premium, recruiter-friendly IT internship portfolio built with React.js, Vite, and Tailwind CSS. The visual direction is minimal, editorial, and calm: off-white backgrounds, large typography, subtle motion, rounded photography, thin borders, and muted blue accents for Information Technology.

## Tech Stack

- React.js with Vite
- Tailwind CSS
- Lucide React icons
- EmailJS for deployment-friendly contact form delivery

## File Structure

```text
.
├── .env.example
├── .gitignore
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   └── images
│       ├── Khloe.JPEG
│       ├── csg.jpg
│       ├── dlsu-logo.svg
│       ├── gdgoc.svg
│       ├── ssc.png
│       └── usg.jpg
├── src
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Reveal.jsx
│   │   └── Skills.jsx
│   └── data
│       └── portfolio.js
├── tailwind.config.js
└── vite.config.js
```

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Build for Production

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Update Project Links

The five project cards are stored in:

```text
src/data/portfolio.js
```

Replace the `"#"` values inside each project `links` object:

```js
links: {
  documentation: "#",
  liveDemo: "#",
  githubRepo: "#",
}
```

## Configure the EmailJS Contact Form

The contact form in `src/components/Contact.jsx` uses EmailJS and sends these fields:

- Name
- Email
- Subject
- Message

It includes required-field validation, email-format validation, a loading state, disabled submit state, success/error messages, and a hidden honeypot field for basic spam prevention.

If EmailJS is not configured, the form shows:

```text
Contact form setup is incomplete. Please add the EmailJS credentials in your environment variables.
```

### 1. Create an EmailJS Account

1. Go to `https://www.emailjs.com/`.
2. Create an account or sign in.
3. Open the EmailJS dashboard.

### 2. Create an Email Service

1. In EmailJS, go to Email Services.
2. Choose Add New Service.
3. Select the email provider you want to use, such as Gmail.
4. Connect and authorize the email account that will send portfolio messages.
5. Copy the Service ID. It will be used as:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
```

### 3. Create an Email Template

1. In EmailJS, go to Email Templates.
2. Create a new template.
3. Set the email subject to use the `subject` variable.
4. Set Reply To to use `reply_to`.
5. Use this kind of message body:

```text
New portfolio inquiry from {{from_name}}

From: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

Sent at: {{sent_at}}
Time on page: {{time_on_page_seconds}} seconds
```

Create a template with these variables:

```text
from_name
from_email
reply_to
subject
message
to_email
sent_at
time_on_page_seconds
```

### 4. Send Messages to Khloe's Email

Set the template recipient or To Email field to:

```text
khloe.ose@gmail.com
```

You may also use the `to_email` template variable as the recipient if your EmailJS template supports it.

### 5. Get the Template ID and Public Key

1. Copy the Template ID from the EmailJS template page.
2. Go to Account > General or Account > API Keys in EmailJS.
3. Copy the Public Key.

These will be used as:

```env
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 6. Create a Local `.env` File

Create a `.env` file from `.env.example`:

```bash
cp .env.example .env
```

Paste your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after editing `.env`.

### 7. Add Environment Variables in Vercel or Netlify

Do not commit `.env`. It is ignored by `.gitignore`.

For Vercel:

1. Open the Vercel project dashboard.
2. Go to Settings > Environment Variables.
3. Add `VITE_EMAILJS_SERVICE_ID`.
4. Add `VITE_EMAILJS_TEMPLATE_ID`.
5. Add `VITE_EMAILJS_PUBLIC_KEY`.
6. Redeploy the site.

For Netlify:

1. Open the Netlify site dashboard.
2. Go to Site configuration > Environment variables.
3. Add `VITE_EMAILJS_SERVICE_ID`.
4. Add `VITE_EMAILJS_TEMPLATE_ID`.
5. Add `VITE_EMAILJS_PUBLIC_KEY`.
6. Redeploy the site.

EmailJS public keys are intended for browser use, but keeping them in environment variables makes the setup easier to manage across local, Vercel, and Netlify deployments.

### 8. Test the Contact Form

1. Run `npm run dev`.
2. Open the local site.
3. Fill out the contact form with a real email address.
4. Submit the form.
5. Confirm that the message arrives at `khloe.ose@gmail.com`.
6. Deploy to Vercel or Netlify.
7. Submit one test message from the deployed site.
8. Confirm that the deployed message also arrives.

If the variables are missing, the form shows an error instead of pretending the message was sent.

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use these settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add the EmailJS environment variables before deploying.

## Deploy to Netlify

1. Push the project to GitHub.
2. Import the repository in Netlify.
3. Use these settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Add the EmailJS environment variables before deploying.
