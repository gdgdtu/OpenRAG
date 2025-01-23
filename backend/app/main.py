from fastapi import FastAPI

# Placeholder 
app = FastAPI()

@app.get("/health")
async def health_check():
    return {"status": "ok"}

# Add routes for retriever, generator, personalization, etc., as they are developed.
