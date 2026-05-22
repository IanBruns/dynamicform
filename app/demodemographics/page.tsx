import { Suspense } from "react"
import Link from "next/link"
import DemographicsDemoForm from "./DemographicsDemoForm"

export default function DemographicsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Suspense fallback={<div>Loading loading form ...</div>}>
        <DemographicsDemoForm />
      </Suspense>
      <Link className="text-blue-700 underline hover:text-red-700" href="/">
        To Home
      </Link>
    </main>
  )
}
