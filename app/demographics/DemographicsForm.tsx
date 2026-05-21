import { createClient } from "@/lib/supabase/server"
import DynamicForm from "../components/DynamicForm"

export default async function DemographicsForm() {
  const supabase = await createClient()

  const { data: demographicFormData } = await supabase
    .from("form_render_view")
    .select("*")
    .eq("name", "demographics")
    .single()

  async function submit(newFormData: FormData) {
    "use server"
    const data = Object.fromEntries(newFormData.entries())
    console.log(data)
  }

  return <DynamicForm formData={demographicFormData} action={submit} />
}
