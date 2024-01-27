

let ContentPlace = document.querySelector(".content");
const videos = [
    {
        page_link: '/pages/mr-beast-iatopted-dogs.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "MrBeast",
        video_name: "I Adopted 100 Dogs!",
        thumbnail_video: "/images/thumbnails/mrbeast_dogs.png",
        video_views: "4,4 mln marta • 1 soat oldin",
        channel_avatar: "https://yt3.ggpht.com/ytc/AIf8zZTM49hEx9zyui_0zDZKi75EgqJPJfuDmWu1cePdQQ=s68-c-k-c0x00ffffff-no-rj"
    },
    {
        page_link: '/pages/temur-xatamov_technlgy.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "Temur Khatamov",
        video_name: "150$ ga qanaqa telefon olgan maqul?",
        thumbnail_video: "/images/thumbnails/timur_xatamov.png",
        video_views: "39 ming marta • 4 kun oldin",
        channel_avatar: "https://yt3.ggpht.com/S0-Ulumsw0588ELp2HLJwI1OFj2eSHhq1LD1_5tCncsyzbz8V6ataAwu-c8b0gKWyqF4iBvNsw=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
        page_link: '/pages/isomtv-1kunda-10mlnishlab_topdim64.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "ISOMTV",
        video_name: "24 SOATTA 10,000,000 SO'M ISHLAB TOPDIM!",
        thumbnail_video: "/images/thumbnails/8.jpg",
        video_views: "6,4 mln marta • 1 yil oldin",
        channel_avatar: "https://yt3.ggpht.com/8D4jZR7xTtKL5KCxn00ADyQ_Sr5XtD3pGqbVeSaG2xpu5QwRCV28P7CIZU9CTYKT5MDCh2g7sqE=s176-c-k-c0x00ffffff-no-rj-mo"
    },

    {
        page_link: '/pages/konsta-odamlar-oficialmusicvideo.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "Konsta Uz",
        video_name: "Konsta - Insonlar (Official Music Video)",
        thumbnail_video: "/images/thumbnails/konsta_odamlar.png",
        video_views: "740 ming marta • 1 oy oldin",
        channel_avatar: "https://yt3.ggpht.com/ltGc4b9UMCMFMiyQKt-RaGfNdokCN-nfhFDgz0D2FscRIno3J_JTsdI94erXzTEZPHwEoA0piA=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
        page_link: '/pages/wengalbli-mercades_padaril.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "WENGALLBLI",
        video_name: " WENGALLBI ПОДАРИЛ РАСУЛУ НОВУЮ ГРАНТУ!",
        thumbnail_video: "/images/thumbnails/shengalbi.png",
        video_views: "397 ming marta • 7 soat oldin",
        channel_avatar: "https://yt3.ggpht.com/ESRAJauVz62jmjNPkXvfvfP7RySIEKle6S04o658-Kjtrk0AZTzL969D6zskIIlkeV-h5qhFHAw=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
        page_link: '/pages/watchpage.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "SUBYEKTIV",
        video_name: "Aytilmagan Haqiqatlar - O'zbek Trakchilari",
        thumbnail_video: "/images/thumbnails/subyectiv_trakchilar.png",
        video_views: "1,8 mln marta • 4 oy oldin",
        channel_avatar: "https://yt3.ggpht.com/AhRkgu01vCTifaLymgO4s6vLzjjoUjA_UH18mRTB5EekOE2bK0oqlbUnVUm4lG2Ge0p80Q7XkGg=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
        page_link: '/pages/uzperfect-endi-tdmdahechqachon.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "Uz Perfect",
        video_name: "TDM ENDI HECH QACHON YUTQAZMAYSIZ",
        thumbnail_video: "/images/thumbnails/tdm_yutish1.png",
        video_views: "161 ming marta • 1 yil oldin",
        channel_avatar: "https://yt3.googleusercontent.com/ytc/AIf8zZSaMKx-6giP8ndrY9g3JsCMih3RPspHndO1HSD0Bw=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
        page_link: '/pages/texnoplov-eng-zor-telefonlar.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "Texnoplov",
        video_name: "Top-5 arzon telefonlar 2023 | TEXNOPLOV",
        thumbnail_video: "/images/thumbnails/texnoplov_phones.png",
        video_views: "189 mln marta • 3 hafta oldin",
        channel_avatar: "https://yt3.ggpht.com/Jw-CVsWn2KguiHUoxBsa-0ZF_7pGBBj_kVKn0aoh8zLUWaA87RNmlsfe8rkW6waLkTpVhPuv=s176-c-k-c0x00ffffff-no-rj-mo"
    },
    {
        page_link: '/pages/how-to-create-3d-website.html',
        video_url: '<iframe width="814" height="490" src="https://www.youtube.com/embed/lOKASgtr6kU" title="I Rescued 100 Abandoned Dogs!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        channel_name: "MrBeast",
        video_name: "How to Create 3D Website Designs With No Code",
        thumbnail_video: "/images/thumbnails/website3d.png",
        video_views: "180 ming marta • 4 oy oldin",
        channel_avatar: "https://yt3.ggpht.com/SSAsRA8WlURHQa9ouWn8Qn_nzfIvqQ3yWi66d1gbYs4NttTXaI-U8p9HpUfy6Eog7eW5ZsE=s176-c-k-c0x00ffffff-no-rj-mo"
    }
]





document.addEventListener("DOMContentLoaded", function () {
    getVideos()
    function getVideos() {
        videos.forEach(video_item => {
            const div = document.createElement("div");
            div.classList.add("video_card");
            div.innerHTML = `
                    <a href="${video_item.page_link}">
                    <img data-aos="fade-up" class="thumbnail" src="${video_item.thumbnail_video}" alt="video_thumbnail">
                    <div class="channel_infos">
                        <div class="channel_profile">
                            <img src="${video_item.channel_avatar}"/>
                        </div>
                        <div class="video_titles">
                            <h1>${video_item.video_name}</h1>
                            <p>${video_item.channel_name}
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                    <path d="M5 0.5C2.25 0.5 0 2.75 0 5.5C0 8.25 2.25 10.5 5 10.5C7.75 10.5 10 8.25 10 5.5C10 2.75 7.75 0.5 5 0.5ZM3.9 8.15L1.8 6.1L2.5 5.4L3.9 6.75L7.5 3.2L8.2 3.9L3.9 8.15Z" fill="#AAAAAA"/>
                                </svg>
                            </p>
                            <span>${video_item.video_views}</span>
                        </div>
                    </div>
                    </a>
                `;
            ContentPlace.append(div)
        });
    }

})

// Burger menu codes
let BurgerBtn = document.querySelector(".burger_btn");
let LeftSidebar = document.querySelector(".sidebar");
document.addEventListener("click", function (e) {
    if (e.target.closest(".burger_btn")) {
        if (LeftSidebar.style.display == "block") {
            LeftSidebar.style.display = "none";
        }
        else {
            LeftSidebar.style.display = "block";
        }
    }
})

let navbar1 = document.querySelector(".main_nav");
const onscroll = () => {
    if (window.scrollY > 50) {
        navbar1.classList.add("active_nav")
    }
    else {
        navbar1.classList.remove("active_nav")
    }   
    console.log(window.screenY);
}












