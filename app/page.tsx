import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Link href="/login">Login Page Demo</Link>
      <Link href="/demographics">Demographics Page Demo</Link>
    </main>
  )
}
