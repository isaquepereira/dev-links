function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  html.classList.toggle("light")

  const profileAvatar = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    profileAvatar.setAttribute("src", "./assets/avatar-light.png")
    profileAvatar.setAttribute("alt", "Avatar light mode")
  } else {
    profileAvatar.setAttribute("src", "./assets/avatar.png")
    profileAvatar.setAttribute("alt", "Avatar dark mode")
  }
}
