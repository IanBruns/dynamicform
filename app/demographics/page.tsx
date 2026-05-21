import { Suspense } from "react"
import DemographicsForm from "./DemographicsForm"

export default function DemographicsPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Suspense fallback={<div>Loading loading form ...</div>}>
        <DemographicsForm />
      </Suspense>
    </main>
  )
}
