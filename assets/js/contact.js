
import { supabase } from "./supabase.js"
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault()
  await supabase.from("contact_messages").insert({
    name: name.value,
    email: email.value,
    message: message.value
  })
  alert("Message sent")
})
