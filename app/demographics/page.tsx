import { Suspense } from "react"
import DemographicsForm from "./DemographicsForm"

export default function DemographicsPage() {
  return (
    <Suspense fallback={<div>Loading loading form ...</div>}>
      <DemographicsForm />
    </Suspense>
  )
}
