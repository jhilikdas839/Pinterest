let arr = [
  { name: "dog", image: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=362" },
  { name: "cat", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=843" },
  { name: "flower", image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=388" },
  { name: "mango", image: "https://images.unsplash.com/photo-1582655299221-2b6bff351df0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=581" },
  { name: "apple", image: "https://plus.unsplash.com/premium_photo-1661322640130-f6a1e2c36653?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" },
  { name: "tiger", image: "https://images.unsplash.com/photo-1615963244664-5b845b2025ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464" },
  { name: "mountain", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" },
  { name: "sun", image: "https://images.unsplash.com/photo-1582614378336-15327b1f6a0d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387" },
  { name: "white Flower", image: "https://images.unsplash.com/photo-1744180180567-c8b6bbbce5c9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" },
  { name: "Bird", image: "https://images.unsplash.com/photo-1760694785894-f9944fb8af99?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464" },
  { name: "Model", image: "https://plus.unsplash.com/premium_photo-1664464228922-6ebebb31ab9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" },
  { name: "Quotation", image: "https://plus.unsplash.com/premium_photo-1761696088065-04b337ee962a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=404" },
  { name: "Smoke", image: "https://images.unsplash.com/photo-1760390728699-e7d7b3740631?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=366" },
  { name: "Patterns", image: "https://images.unsplash.com/photo-1761429528505-e153940c62a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387" },
  { name: "Kid", image: "https://images.unsplash.com/photo-1599479403948-1a62f09a2e83?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870" },
  { name: "Sea", image: "https://images.unsplash.com/photo-1755507039384-e92e3bb18c37?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387" }


]


function showimage() {
  let blank = ""
  arr.forEach((obj) => {
    blank += `<div class= "box">
                    <img class="cursor-pointer "src="${obj.image}" alt="">
                    <div class="caption">Lorem ipsum</div>
                  </div> `

  })

  let container = document.querySelector(".container")
  container.innerHTML = blank
}



function inputHandeler() {
  let input = document.querySelector("#searchinput")
  let overlay = document.querySelector(".overlay")
  input.addEventListener("focus", () => {
    overlay.style.display = "block"
  })

  input.addEventListener("blur", () => {
    overlay.style.display = "none"
  })

  input.addEventListener("input", () => {
    const filteredArr = arr.filter((f) => f.name.toLowerCase().startsWith(input.value.toLowerCase()))

    let all = ''
    filteredArr.forEach((obj) => {
      all += `<div
                        class="res flex px-8 py-3">
                        <i class="ri-search-line font-semibold mr-2 px-5"></i>
                        <h3 class="font-semibold px-5">${obj.name}</h3>
                    </div>`
    })
    let searchData = document.querySelector(".searchdata")
    if (input.value.trim().length > 0) {
      searchData.innerHTML = all;
      searchData.style.display = "block"
    }else {
      searchData.style.display = "none"
    }

  })
}


inputHandeler()
showimage()