from pydantic import BaseModel

class ProductResponse(BaseModel):
  id: int
  title: str
  price: float
  image: str
  description: str
  category: str
  
  model_config = {"from_attributes": True}
  