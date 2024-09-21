import { redirect } from "next/navigation";

export default function Home() {
  // Redirect to /user when the root URL is accessed
  redirect("/user");

  return null; // No need to render anything since the redirect will occur
}
