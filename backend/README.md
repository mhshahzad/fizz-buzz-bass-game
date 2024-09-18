### Installation and Running Guide

#### Prerequisites
- Python 3.7+
- `pip3` (Python package installer)

#### Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/mhshahzad/fizz-buzz-game.git
   cd backend
   ```

2. **Create a Virtual Environment**
   ```sh
   python -m venv .venv
   ```

3. **Activate the Virtual Environment**
    - On macOS and Linux:
      ```sh
      source .venv/bin/activate
      ```
    - On Windows:
      ```sh
      .venv\Scripts\activate
      ```

4. **Install Dependencies**
   ```sh
   pip3 install -r requirements.txt
   ```

#### Running the Application

   ```sh
   fastapi run main.py
   ```


#### Example Usage

- **For a number that is a multiple of 3:**
  ```sh
  curl -X POST "http://0.0.0.0:8000" -H "Content-Type: application/json" -d '{"number": 3}'
  ```
  Response:
  ```json
  {
    "result": "Fizz"
  }
  ```

- **For a number that is a multiple of 5:**
  ```sh
  curl -X POST "http://0.0.0.0:8000" -H "Content-Type: application/json" -d '{"number": 5}'
  ```
  Response:
  ```json
  {
    "result": "Buzz"
  }
  ```

- **For a number that is a multiple of both 3 and 5:**
  ```sh
  curl -X POST "http://0.0.0.0:8000" -H "Content-Type: application/json" -d '{"number": 15}'
  ```
  Response:
  ```json
  {
    "result": "Bass"
  }
  ```

- **For any other positive number:**
  ```sh
  curl -X POST "http://0.0.0.0:8000" -H "Content-Type: application/json" -d '{"number": 7}'
  ```
  Response:
  ```json
  {
    "result": 7
  }
  ```

#### Error Handling

- **For a non-positive integer:**
  ```sh
  curl -X POST "http://0.0.0.0:8000" -H "Content-Type: application/json" -d '{"number": -1}'
  ```
  Response:
  ```json
  {
    "detail": "Number must be a positive integer"
  }
  ```

#### API Documentation

The API documentation can be accessed at:
```
http://0.0.0.0:8000/docs
```