document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".recruitment");

    for (let i = 0; i < 5; i++) {
        const recruitmentDiv = document.createElement("div");
        recruitmentDiv.classList.add("item");

        recruitmentDiv.innerHTML = `
            <div class="boder-box"><img src="/images/image 3.png" alt=""></div>
            <div class="text">
                <p class="head">Chuyên viên tuyển dụng nhân sự</p>
                <p class="dc">Mức lương <span style="color: red;">20.000.000 vnđ</span> <br>
                    Ngày hết hạn: 20/07/2022 <br>
                    Địa chỉ làm việc: B5-26 Vinhomes Gardenia Hàm Nghi Cầu Diễn, Nam Từ Liêm, Hà Nội</p>
            </div>
            <div class="apply">
                <button class="ap"><img src="/icon-pc/Group 1518.png" alt="">Ứng tuyển</button>
                <button class="dt">Chi tiết tuyển dụng</button>
            </div>
        `;

        container.appendChild(recruitmentDiv);
    }

    container.querySelectorAll(".ap").forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "recruitment.html";
        });
    });

    container.querySelectorAll(".dt").forEach(button => {
        button.addEventListener("click", function() {
            window.location.href = "recruitment-main.html";
        });
    });
});
