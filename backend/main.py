from fastapi import FastAPI

app = FastAPI(title="What The Duck")

@app.get("/")
def root():
  return { "status":200, "message": "Hello from backend"}

