
<h1 align="center">🚀 StartupDeck</h1>

<p align="center">
  AI-powered startup pitch deck generator built with cutting-edge tech.
</p>

---

## 🧠 What is StartupDeck?

**StartupDeck** is your AI-powered co-founder for creating powerful investor-ready pitch decks — all from just your idea. From market potential to MVP stack, slide content, and design — StartupDeck makes it effortless.

> Build decks that convince investors, with zero design or copywriting needed.

---

## ✨ Key Features

- 💡 AI-Powered Idea Analysis (Problem, Solution, Market, Monetization)
- 🧱 Auto-generated Slide Decks
- 🎨 Sleek UI with Responsive Design
- 🔐 Auth with Supabase (OAuth + Email)
- 📄 Slide Export (PDF, coming soon)
- 🌐 Built with Vite + React + Tailwind + TypeScript

---

## 🔧 Tech Stack

| Layer         | Tech Used                                                |
|---------------|----------------------------------------------------------|
| 🧠 AI Engine   | (Pluggable – Your own or OpenAI/Gemini via backend)      |
| 🌐 Frontend   | Vite, React.js, TypeScript, Tailwind CSS                 |
| 🔐 Auth       | Supabase (Auth & Postgres with Row-Level Security)       |
| ⚙️ Dev Tools  | Bun (or npm/yarn), Prettier, ESLint, GitHub Actions     |

---

## 🚀 Getting Started

### 1. Clone this repo
```bash
git clone https://github.com/trynayash/startupdeck.git
cd startupdeck
```

### 2. Install dependencies
Using **Bun**:
```bash
bun install
```
Or with **npm**:
```bash
npm install
```

### 3. Setup Supabase
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Start development server
```bash
bun run dev
# or
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧩 Folder Structure

```
startupdeck/
├── public/              # Static assets
├── src/
│   ├── components/      # UI components
│   ├── pages/           # Route pages
│   ├── styles/          # Tailwind configs
│   ├── hooks/           # Custom hooks
│   └── utils/           # Utility functions
├── supabase/            # Supabase config
├── .env                 # Environment variables
├── bun.lockb            # Bun lockfile
└── README.md
```

---

## 🔥 Coming Soon

- 🎯 AI Prompt Studio (custom slide prompts)
- 🧠 MVP Tech Stack Generator
- 🪄 Pitch Deck Templates
- 🛠 Admin + Analytics Panel
- 📤 Export to PDF/PPTX

---

## 🙌 Contributing

1. Fork the repo 🍴  
2. Create a branch: `git checkout -b feature/my-feature`  
3. Make your changes 💻  
4. Commit: `git commit -m "Added my feature"`  
5. Push and submit a PR 🚀

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file.

---

## 💬 Connect with Me

- GitHub: [@trynayash](https://github.com/trynayash)
- Portfolio: [designwithyxsh](https://github.com/trynayash)
- LinkedIn: [Yash Suthar](https://linkedin.com/in/yxshsuthar)
- Twitter: [@yxshcodes](https://twitter.com/yxshcodes)

---

> 💼 Built by Yash Suthar – turning startup ideas into powerful investor decks with AI.
