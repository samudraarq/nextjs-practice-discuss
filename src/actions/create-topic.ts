"use server";

export async function createTopic(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");

  console.log(`Creating topic: ${name} - ${description}`);

  // TODO: revalidate the homepage
}
