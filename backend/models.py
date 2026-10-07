from backend.database import Base
from sqlalchemy import String, 
from sqlalchemy.orm import Mapped, mapped_column


class User(Base):
  __tablename__ = "users"

  id: Mapped[int] = mapped_column(primary_key=True)
  email: Mapped[str] = mapped_column(String(100), unique=True)
  password: Mapped[str] = mapped_column(String(255))
  first_name: Mapped[str] = mapped_column(String(100))
  last_name: Mapped[str] = mapped_column(String(100))
  phone_number: Mapped[str] = mapped_column(String(20), unique=True)
  bio: Mapped[str] = mapped_column(String(255))
  address: Mapped[str] = mapped_column(String(255))
  city: Mapped[str] = mapped_column(String(100))
  state: Mapped[str] = mapped_column(String(100))
  zipcode: Mapped[str] = mapped_column(String(20))

class Pruduct(Base):
  __tablename__ = "products"
  
  id: Mapped[int] = mapped_column(primary_key=True)
  title: Mapped[str] = mapped_column(String(255))
  price: Mapped[float] = mapped_column()
  image: Mapped[str] = mapped_column()
  description: Mapped[str] = mapped_column(String(255))
  category: Mapped[str] = mapped_column(String(255))
