import { createClient } from "@/lib/supabase/server"
import DynamicForm from "../components/DynamicForm"
import EmptyState from "../components/EmptyState"

export default async function LoginForm() {
  const supabase = await createClient()

  const { data: loginFormData } = await supabase
    .from("form_render_view")
    .select("*")
    .eq("name", "login")
    .single()

  async function submit(newFormData: FormData) {
    "use server"
    const data = Object.fromEntries(newFormData.entries())
    console.log(data)
  }

  return loginFormData.id ? (
    <DynamicForm formData={loginFormData} action={submit} />
  ) : (
    <EmptyState />
  )
}
