"use client"

import React, { useState } from "react"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulasi autentikasi
    console.log("Username:", username)
    console.log("Password:", password)
    alert("Login simulated! (Implement logic here)")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-stone-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-stone-800 p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">
              Username
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-stone-700 dark:text-white"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-200 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 dark:bg-stone-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
