from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI
from schemas import ProductResponse
from database import Base, engine, get_db
from models import Product

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

@asynccontextmanager
async def lifespan(app: FastAPI):
  # Run on startup - create tables if they don't exist
  async with engine.begin() as conn:
    await conn.run_sync(Base.metadata.create_all)
  yield
  
  await engine.dispose()


app = FastAPI(title="What The Duck", lifespan=lifespan)

@app.get("/")
def root():
  return { "status":200, "message": "Hello from backend"}

@app.get("/products", response_model=list[ProductResponse])
async def get_products(db: AsyncSession = Depends(get_db)):
  result = await db.execute(select(Product))
  products = result.scalars().all()
  return products