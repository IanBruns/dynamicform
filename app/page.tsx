import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Link
        className="text-blue-700 underline hover:text-red-700"
        href="/demologin"
      >
        Login Page Demo
      </Link>
      <Link
        className="text-blue-700 underline hover:text-red-700"
        href="/demodemographics"
      >
        Demographics Page Demo
      </Link>
    </main>
  )
}
