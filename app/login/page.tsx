import { createClient } from "@/lib/supabase/server"
import { Suspense } from "react"

export default async function LoginPage() {
  const supabase = await createClient()

  const { data } = await supabase
    .from("form_render_view")
    .select("*")
    .eq("id", 1)
    .single()

  return (
    <Suspense fallback={<div>Loading instruments...</div>}>
      <pre>{JSON.stringify(data)}</pre>
    </Suspense>
  )
}
