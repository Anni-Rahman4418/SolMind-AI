# SolMind AI — Interactive Demo (Next.js)

Front-end demo for the 18 Nov 2026 submission. All tutoring logic is scripted and all data is sample data.

## Run
    npm install
    npm run dev      # http://localhost:3000

## Demo flow
/  →  /onboarding  →  /assessment/diagnostic  →  /tutor  →  /knowledge-map  →  /analytics  (+ /dashboard)

1. Choose "Practice & Improve", enter 6 → suspected friction gap + follow-up question.
2. Open the tutor, answer step by step → Net Force and Friction improve.
3. Check the knowledge map and analytics; they share one state (lib/demo.tsx).
4. "Reset demo" in the sidebar restores the start state.

## Next (MVP)
Supabase auth + tables, OpenAI Route Handlers with Zod, mathjs validator, pgvector RAG, React Flow map, Recharts.
