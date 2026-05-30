'use client'
import { api } from "@/lib/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [formData, setFormData] = useState({});
  const router = useRouter()
  function handleChange(event) {
    const { name, value } = event.target
    console.log(formData)

    setFormData({ ...formData, [name]: value })
  }
  const handelSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await api.post('/api/auth/login', formData)
      console.log(res.data)
      router.push('/home')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Login</h1>

        <form
          onSubmit={handelSubmit}
          className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Password</label>
            <input
              name="password"
              onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 text-primary-foreground font-medium"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}