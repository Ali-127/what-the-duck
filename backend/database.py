from pydantic_settings import BaseSettings, SettingsConfigDict
from sqlalchemy.ext.asyncio import async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase


class Settings(BaseSettings):
  model_config = SettingsConfigDict(env_file=".env", extra="ignore")
  db_url: str
  
settings = Settings() # type: ignore

# create engine(connection pool)
engine = create_async_engine(
  url=settings.db_url,
  echo=True,
  pool_pre_ping=True
)

# session factory(create sessions per request)
SessionLocal = async_sessionmaker(engine, expire_on_commit=False)

# Base class for models
class Base(DeclarativeBase):
  pass

# FastAPI dependency
async def get_db():
  async with SessionLocal() as session:
    yield session
