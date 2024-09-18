from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)


class NumberRequest(BaseModel):
    number: int


@app.post("/")
def root(request: NumberRequest):
    number = request.number
    if number <= 0:
        raise HTTPException(status_code=400, detail="Number must be a positive integer")
    if number % 3 == 0 and number % 5 == 0:
        return {"result": "Bass"}
    elif number % 3 == 0:
        return {"result": "Fizz"}
    elif number % 5 == 0:
        return {"result": "Buzz"}
    else:
        return {"result": number}
