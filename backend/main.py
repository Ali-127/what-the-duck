from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI, HTTPException
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

# Get all products
@app.get("/products", response_model=list[ProductResponse])
async def get_products(db: AsyncSession = Depends(get_db)):
  result = await db.execute(select(Product))
  products = result.scalars().all()
  return products

# Get product by ID
@app.get("/products/{id}", response_model=ProductResponse)
async def get_product_id(id: int, db: AsyncSession = Depends(get_db)):
  result = await db.execute(select(Product).where(Product.id == id))
  product = result.scalar_one_or_none()

  if product is None:
    raise HTTPException(status_code=404, detail="Product not found")

  return product
