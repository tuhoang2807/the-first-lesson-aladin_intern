const products = [
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    { imgSrc: 'images/Rectangle 1007.png', title: 'Dây chuyền bia hơi', description: 'Dây chuyền bia nhà hàng công suất 500 lít/mẻ đến 2000 lít/mẻ, đáp ứng tốt nhu cầu kinh doanh vừa và nhỏ' },
    

    
];

const productsPerPage = 9;
let currentPage = 1;

function displayProducts(page) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const paginatedProducts = products.slice(start, end);

    paginatedProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('sp');
        productDiv.innerHTML = `
            <img src="${product.imgSrc}" alt="">
            <h2>${product.title}</h2>
            <p class="text">Mô tả sản phẩm:</p>
            <p class="dc">${product.description}</p>
            <button><img src="icon-pc/lienhe.png" alt="">Nhận tư vấn về sản phẩm</button>
        `;
        productContainer.appendChild(productDiv);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggle-list');
    const businessList = document.getElementById('business-list');
    const closeButton = document.getElementById('close-list');

    toggleButton.addEventListener('click', function() {
        businessList.classList.toggle('visible');
    });

    closeButton.addEventListener('click', function() {
        businessList.classList.remove('visible');
    });

    update();
});

function update() {
    displayProducts(currentPage);
}
