import { Suspense } from "react"
import Link from "next/link"
import LoginForm from "./LoginForm"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Suspense fallback={<div>Loading loading form ...</div>}>
        <LoginForm />
      </Suspense>
      <Link className="text-blue-700 underline hover:text-red-700" href="/">
        To Home
      </Link>
    </main>
  )
}
