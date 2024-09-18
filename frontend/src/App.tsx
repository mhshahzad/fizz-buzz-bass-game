// App.tsx
import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [result, setResult] = useState('');
    const [allResults, setAllResults] = useState('');

    const handleOnSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await axios.post('http://0.0.0.0:80', { number: inputValue }).then((response: { data: { result: string } }) => {
            const newResult = response.data.result;
            if (newResult) {
                setResult(newResult);
                setAllResults(prevResults => prevResults ? `${prevResults}${newResult}` : newResult);
            }
        }).catch((error: { response: { data: { detail: string } } }) => {
            setResult(error.response.data.detail);
        });
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setInputValue(value);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className="row">
                <div className="col">
                    <div className="card text-center shadow" style={{ width: '500px' }}>
                        <div className="card-body">
                            <img src="/react.svg" alt="React Logo" className="w-25 mb-2" />
                            <h5 className="card-title mb-3">FizzBuzzBass</h5>
                            <form onSubmit={handleOnSubmit} className='needs-validation' noValidate>
                                <div className="container text-center">
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                required
                                                className={`form-control ${!isValid ? 'is-invalid' : ''}`}
                                                placeholder="Enter a positive number"
                                                value={inputValue}
                                                onChange={handleInputChange}
                                            />
                                            <div className="invalid-feedback">
                                                Please enter a positive number
                                            </div>
                                        </div>
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary w-100">Play</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            Result: {result}
                            <div className="mt-3">
                                All Results: {allResults}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;