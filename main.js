const servicesProvideData = [
  {
    img: "images/homestay.png",
    title: "HomeStay",
  },
  {
    img: "images/Motobike.png",
    title: "Thuê xe",
  },
  {
    img: "images/pngtree-earth-travel-abroad-travel-tourism-tourism-promotion-png-image_505653 1.png",
    title: "Tour du lịch",
  }
]

const thePlacesExplore = [
  {
    img: "images/nui-doi-quan-ba.png",
    title: "Chặng 1",
  },
  {
    img: "images/cay-co-don-2.png",
    title: "Chẳng 2",
  },
  {
    img: "images/doc-tham-ma.png",
    title: "Chẳng 3",
  },
]

const thePlacesBeauty = [
  {
    img: "images/nui-doi-quan-ba.png",
  },
  {
    img: "images/cay-co-don-2.png",
  },
  {
    img: "images/doc-tham-ma.png",
  },
]

const renderBoxRight = () => {
  const boxRight = document.getElementById('box-right')

  const html = servicesProvideData.map(item => {
    return `
    <div class="box-right-item">
    <p class="box-right-text">${item.title}</p>
    <div>
        <img class="anh1" src="${item.img}" alt="">
    </div>
</div>
    `
  })

  boxRight.innerHTML = html.join('')
}

function main() {
  renderBoxRight()
}

main()

//if, else, loop
