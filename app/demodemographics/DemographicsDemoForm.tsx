import { createClient } from "@/lib/supabase/server"
import DynamicForm from "../components/DynamicForm"
import EmptyState from "../components/EmptyState"

export default async function DemographicsDemoForm() {
  const supabase = await createClient()

  const { data: demographicFormData } = await supabase
    .from("form_render_view")
    .select("*")
    .eq("name", "demographics")
    .single()

  async function submit(newFormData: FormData) {
    "use server"
    const supabase = await createClient()
    const packagedData = demographicFormData.elements.reduce(
      (
        acc: Record<string, string | string[] | unknown>,
        { field, element }: { field: string; element: string },
      ) => {
        if (element === "checkbox") {
          acc[field] = newFormData.getAll(field).map(String)
          return acc
        }

        const value = newFormData.get(field)
        const existingField = acc[field]

        if (existingField === undefined) {
          acc[field] = value
        } else if (Array.isArray(existingField)) {
          acc[field] = [...existingField, value]
        } else {
          acc[field] = [existingField, value]
        }

        return acc
      },
      {} as Record<string, string | string[]>,
    )

    const { error } = await supabase.from("submitted_forms").insert([
      {
        name: demographicFormData.name,
        form_data: packagedData,
      },
    ])
    if (error?.message) {
      console.error(error.message)
    }
  }

  return demographicFormData.id ? (
    <DynamicForm formData={demographicFormData} action={submit} />
  ) : (
    <EmptyState />
  )
}
