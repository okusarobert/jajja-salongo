# Jajja Salongo Ndawula Spiritual Healing Website

A multilingual Next.js website for traditional healing services, supporting 5 languages with Google Translate integration.

## Features

- **Multilingual Support**: English, Swahili, Luganda, French, and Arabic
- **Google Translate Integration**: Dynamic translations using Google Translate API
- **Fallback Translations**: Pre-translated content when API is unavailable
- **Automatic Language Detection**: Based on user's browser preferences and location
- **SEO-Friendly**: Localized URLs for better search engine optimization

## Supported Languages

- **English (en)** - Default language
- **Swahili (sw)** - East African lingua franca
- **Luganda (lg)** - Uganda's primary language
- **French (fr)** - West/Central African regions
- **Arabic (ar)** - North African regions

## Setup

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Google Translate API Setup (Optional)

For dynamic translations, set up Google Translate API:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google Translate API
4. Create credentials (API Key)
5. Copy `env.example` to `.env.local`:

```bash
cp env.example .env.local
```

6. Add your API key to `.env.local`:

```env
GOOGLE_TRANSLATE_API_KEY=your_api_key_here
```

### 3. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) - you'll be redirected to `/en` automatically.

## How It Works

### Translation System

1. **Base Content**: All content starts in English
2. **Google Translate**: If API key is provided, content is translated dynamically
3. **Fallback**: Pre-translated content is used when API is unavailable
4. **Caching**: Translations are cached to reduce API calls

### Language Detection

The middleware automatically detects user language based on:

1. Previously selected language (cookie)
2. Browser `Accept-Language` header
3. Geographic location (for African countries)
4. Falls back to English

### URL Structure

- `/` - Redirects to `/en`
- `/en` - English version
- `/sw` - Swahili version
- `/lg` - Luganda version
- `/fr` - French version
- `/ar` - Arabic version

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Home page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/            # React components
├── utils/
│   ├── translateService.ts # Google Translate integration
│   └── countryLanguageMap.ts # Country-to-language mapping
├── i18n.ts               # Internationalization config
└── middleware.ts         # Locale detection middleware
```

## Deployment

### Environment Variables

For production, set these environment variables:

```env
GOOGLE_TRANSLATE_API_KEY=your_api_key
```

### Vercel Deployment

1. Push to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

The app will work without Google Translate API using fallback translations.

## Development

### Adding New Languages

1. Add locale to `locales` array in `src/i18n.ts`
2. Add fallback translations in `src/utils/translateService.ts`
3. Update middleware configuration if needed

### Adding New Content

1. Add English content to `baseMessages` in `src/i18n.ts`
2. Add corresponding fallback translations
3. Use `useTranslations()` hook in components

## Technologies Used

- **Next.js 15** - React framework with App Router
- **next-intl** - Internationalization for Next.js
- **Google Cloud Translate** - Dynamic translation service
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
# jajja-salongo
