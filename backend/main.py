from fastapi import FastAPI, HTTPException

app = FastAPI()


@app.get("/{number}")
def root(number: int):
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
