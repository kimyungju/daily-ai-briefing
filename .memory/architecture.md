## Architecture

### Data Flow
1. RSS Scraper ingests daily tech/security news feeds.
2. LLM Scripting generates a structured podcast script.
3. TTS converts the script to audio.
4. Supabase Storage stores audio and metadata.

### RAG Pipeline
1. Article Embedding: create vector embeddings for each article.
2. Vector Search: retrieve relevant articles for a user query.
3. Grounded Answer: generate a response using retrieved sources.

### Data Model
- User (Auth)
- Article (Content, Embeddings, Source URL)
- Briefing (Script, AudioURL, Article Refs)
- Chat (User-Briefing Context)
