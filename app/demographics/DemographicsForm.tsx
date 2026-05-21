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

    console.log(packagedData)
  }

  return <DynamicForm formData={demographicFormData} action={submit} />
}
