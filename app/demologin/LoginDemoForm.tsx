import { createClient } from "@/lib/supabase/server"
import DynamicForm from "../components/DynamicForm"
import EmptyState from "../components/EmptyState"

export default async function LoginDemoForm() {
  const supabase = await createClient()

  const { data: loginFormData } = await supabase
    .from("form_render_view")
    .select("*")
    .eq("name", "login")
    .single()

  async function submit(newFormData: FormData) {
    "use server"
    const supabase = await createClient()
    const data = Object.fromEntries(newFormData.entries())

    const { error } = await supabase.from("submitted_forms").insert([
      {
        name: loginFormData.name,
        form_data: data,
      },
    ])
    if (error?.message) {
      console.error(error.message)
    }
  }

  return loginFormData.id ? (
    <DynamicForm formData={loginFormData} action={submit} />
  ) : (
    <EmptyState />
  )
}
