### Installation and Running Guide

#### Prerequisites
- Python 3.7+
- `pip` (Python package installer)

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
   pip install -r requirements.txt
   ```

#### Running the Application

1. **Start the FastAPI Server**
   ```sh
   uvicorn main:app --host 0.0.0.0 --port 80
   ```

2. **Access the Application**
   Open your web browser and navigate to:
   ```
   http://0.0.0.0:8000/{number}
   ```
   Replace `{number}` with the positive integer you want to test.

#### Example Usage

- **For a number that is a multiple of 3:**
  ```
  http://0.0.0.0:8000/3
  ```
  Response:
  ```json
  {
    "result": "Fizz"
  }
  ```

- **For a number that is a multiple of 5:**
  ```
  http://0.0.0.0:8000/5
  ```
  Response:
  ```json
  {
    "result": "Buzz"
  }
  ```

- **For a number that is a multiple of both 3 and 5:**
  ```
  http://0.0.0.0:8000/15
  ```
  Response:
  ```json
  {
    "result": "Bass"
  }
  ```

- **For any other positive number:**
  ```
  http://0.0.0.0:8000/7
  ```
  Response:
  ```json
  {
    "result": 7
  }
  ```

#### Error Handling

- **For a non-positive integer:**
  ```
  http://0.0.0.0:8000/-1
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