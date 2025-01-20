//------------ RESUME BUTTON--------------

let ResumeBtn = document.getElementById("homeBtndiv")
ResumeBtn.onclick = () => {
  window.open("./Ankesh_Kewat_Resume.pdf", "_blank")
}


let navResume = document.getElementById("navResume")
navResume.onclick = () => {
  window.open("./Ankesh_Kewat_Resume.pdf", "_blank")
}

GitHubCalendar(".calendar", "Ankeshkewat", { responsive: true });

document.getElementById('mail').onclick = async () => {
  const name = document.getElementById('name1').value
  const email = document.getElementById('email1').value
  const message = document.getElementById('message1').value
  const form={name,email,message}

  if(!name||!email||!message) return alert("Please provide all details")

  const res = await fetch('https://sore-tan-gecko-tam.cyclic.app/mail', {
    method: "POST",
    body:JSON.stringify(form),
    headers: {
      'Content-Type': "application/json"
    }
  })
  let mes=await res.json();
  alert(mes.msg)
}