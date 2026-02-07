## MVP Tasks

### Phase 1: RSS Ingestion & Script Gen
- Implement RSS feed ingestion for daily cybersecurity sources.
- Normalize and store articles with metadata.
- Generate daily briefing scripts via LLM.

### Phase 2: TTS & Audio UI
- Convert scripts to audio using TTS.
- Store audio in Supabase Storage with metadata.
- Build a minimal audio playback UI.

### Phase 3: RAG Chat Integration
- Embed articles and store vectors.
- Implement vector search retrieval.
- Provide grounded Q&A chat using briefing context.
