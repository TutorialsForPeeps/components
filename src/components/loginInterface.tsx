"use client";
import { useState } from "react";

export default function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the signup process here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <>
            <style jsx>{`
                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #3b0d0d, #000);
                    animation: backgroundAnimation 6s infinite alternate;
                }

                @keyframes backgroundAnimation {
                    0% {
                        background: linear-gradient(135deg, #3b0d0d, #000);
                    }
                    100% {
                        background: linear-gradient(135deg, #000, #3b0d0d);
                    }
                }

                .form-container {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 2rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }

                .form-container h1 {
                    font-size: 1.5rem;
                    color: #ffffff;
                }

                .form-container h2 {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: #ffffff;
                }

                .form-container label {
                    font-size: 0.9rem;
                    color: #ffffff;
                }

                .form-container input {
                    width: 100%;
                    padding: 0.8rem;
                    border: none;
                    border-radius: 8px;
                    margin-top: 0.5rem;
                    background: rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                }

                .form-container input::placeholder {
                    color: #ddd;
                }

                .form-container button {
                    width: 100%;
                    padding: 0.8rem;
                    background: #007bff;
                    color: #ffffff;
                    font-size: 1rem;
                    border: none;
                    border-radius: 8px;
                    margin-top: 1rem;
                    cursor: pointer;
                    transition: background 0.3s;
                }

                .form-container button:hover {
                    background: #0056b3;
                }

                .form-container a {
                    color: #007bff;
                    text-decoration: none;
                }

                .form-container a:hover {
                    text-decoration: underline;
                }
            `}</style>

            <div className="form-container">
                <h1>Custom User Management & Analytics Software Solutions [C.U.M n A.S.S] V3.1</h1>
                <h2>Welcome Back User</h2>

                <form onSubmit={handleSignup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="Enter your email"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        placeholder="Enter your password"
                    />

                    <button type="submit">Log In</button>
                </form>

                <p className="mt-4 text-sm text-center">
                    Already have an account? <a href="#">Sign Up</a>
                </p>
            </div>
        </>
    );
}