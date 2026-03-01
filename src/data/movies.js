import avatarImg from "../assets/img/avatar.jpg"
import blackSwanImg from "../assets/img/black_swan.jpg"
import avatar2Img from "../assets/img/avatar2.jpg"
import avatar3Img from "../assets/img/avatar3.jpg"
import goneGirlImg from "../assets/img/gone_girl.jpg"
import girlInterruptedImg from "../assets/img/girl_interrupted.jpg"
import trumanImg from "../assets/img/truman_show.jpg"
import lotrImg from "../assets/img/lotr.jpg"
import hobbitImg from "../assets/img/hobbit.jpg"
import howlsImg from "../assets/img/hows_moving_castle.jpg"
import prettyWomanImg from "../assets/img/pretty_woman.jpg"
import thingsIHateImg from "../assets/img/10_things.jpg"
import shutterIslandImg from "../assets/img/shutter_island.jpg"
import mammaMiaImg from "../assets/img/mamma_mia.jpg"
import twilightImg from "../assets/img/twilight.jpg"
import grownUpsImg from "../assets/img/grown_ups.jpg"
import midnightRunnersImg from "../assets/img/midnight_runner.jpg"
import parasite from "../assets/img/parasite.jpg"
import prideAndPrejudiceImg from "../assets/img/pride_and_prejudice.jpg"
import harryPotterImg from "../assets/img/harry_potter.jpg"

const movies=[
    {
        id:1,
        img:avatarImg,
        video:"https://youtu.be/5PSNL1qE6VY?si=MEIrz-2YpG7DSbRB",
        title:"Avatar",
        info:"A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
        year:2009,
        genre:"science fiction, action-adventure, and fantasy",
        rating:7.9
    },

    {
        id:2,
        img:blackSwanImg,
        title:"Black Swan",
        video:"https://youtu.be/5jaI1XOB-bs?si=6mPmrsHE_prkLVEe",
        info:"Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
        year:2010,
        genre:"psychological thriller",
        rating:8
    },

    {
        id:3,
        img:avatar2Img,
        video:"https://youtu.be/d9MyW72ELq0?si=ZTMJ-Cg91C7AQhmU",
        title:"Avatar: The Way of Water",
        info:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        year:2022,
        genre:"science fiction, action-adventure, and fantasy",
        rating:7.5
    },

    {
        id:4,
        img:avatar3Img,
        video:"https://youtu.be/nb_fFj_0rq8?si=ov_vQ4jgeUZZxzVd",
        title:"Avatar: Fire and Ash",
        info:"Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, who are led by the fiery Varang, as the conflict on Pandora escalates and a new moral focus emerges.",
        year:2025,
        genre:"science fiction, action-adventure, and fantasy",
        rating:7.4
    },

    {
        id:5,
        img:goneGirlImg,
        title:"Gone girl",
        video:"https://youtu.be/0VGD_jLyE9Y?si=rSWB6cSxL80_8Cmf",
        info:"The husband of a missing woman becomes the main suspect in her disappearance.",
        year:2014,
        genre:"thriller",
        rating:8.1
    },

    {
        id:6,
        img:girlInterruptedImg,
        video:"https://youtu.be/qHeqq6b6Vtw?si=xEQ8yILHlkSx-yIT",
        title:"Girl, interrupted",
        info:"Directionless teenager Susanna is rushed to Claymoore, a mental institution, after a supposed suicide attempt. There she befriends a group of troubled women who deeply influence her life.",
        year:1999,
        genre:"coming-of-age, psychological drama",
        rating:7.3
    },
    {
        id: 7,
        img: trumanImg,
        video: "https://youtu.be/dlnmQbPGuls?si=jw653oU6KiawKTeq",
        title: "The Truman Show",
        info:
        "An insurance salesman discovers that his entire life has been broadcast as a TV show to the world, which leads him to question reality and seek the truth about his existence.",
        year: 1998,
        genre: "drama, sci‑fi",
        rating: 8.1
    },
    {
        id: 8,
        img: harryPotterImg,
        video: "https://youtu.be/VyHV0BRtdxo?si=sIDaDh6XRpd0WVDM",
        title: "Harry Potter and the Sorcerer's Stone",
        info:
        "On his 11th birthday, Harry Potter learns he is a wizard and begins his first year at Hogwarts School of Witchcraft and Wizardry, embarking on a magical adventure filled with friendship and danger.",
        year: 2001,
        genre: "fantasy, adventure",
        rating: 7.6
    },
    {
        id: 9,
        img: prideAndPrejudiceImg,
        video: "https://youtu.be/Ur_DIHs92NM?si=mdb2rC2z5h0Rhhzo",
        title: "Pride & Prejudice",
        info:
        "In 18th‑century England, spirited Elizabeth Bennet navigates issues of manners, marriage, morality and misunderstandings when she meets the proud Mr. Darcy.",
        year: 2005,
        genre: "romance, drama",
        rating: 7.8
    },
    {
        id: 10,
        img: mammaMiaImg,
        video: "https://youtu.be/8RBNHdG35WY?si=7SE-5Sq0c2mH9f4d",
        title: "Mamma Mia!",
        info:
        "A young bride‑to‑be invites three men from her mother’s past to her Greek island wedding, hoping to discover which one is her father, all set to pop hits by ABBA.",
        year: 2008,
        genre: "musical, comedy, romance",
        rating: 6.4
    },
    {
        id: 11,
        img: lotrImg,
        video: "https://youtu.be/V75dMMIW2B4?si=MwgEPY7jPEjUHqqh",
        title: "The Lord of the Rings",
        info:
        "A young hobbit, Frodo, sets out on a perilous quest to destroy a powerful ring that could bring doom to Middle‑earth, aided by companions and tested by overwhelming evil.",
        year: 2001,
        genre: "fantasy, adventure",
        rating: 8.8
    },
    {
        id: 12,
        img: prettyWomanImg,
        video: "https://youtu.be/2EBAVoN8L_U?si=LKURUX0ZpmIyY0Nj",
        title: "Pretty Woman",
        info:
        "A wealthy businessman hires an escort for social events, and the unlikely pair form a bond that challenges class divides and changes both of their lives.",
        year: 1990,
        genre: "romance, comedy",
        rating: 7.0
    },
    {
        id: 13,
        img: thingsIHateImg,
        video: "https://youtu.be/yEmcEuS6xm4?si=oiOiyQOYXLP4GMEB",
        title: "10 Things I Hate About You",
        info:
        "In this modern high school adaptation of Shakespeare’s \"The Taming of the Shrew,\" an awkward teen tries to find a way to date a girl with an attitude problem.",
        year: 1999,
        genre: "comedy, romance",
        rating: 7.3
    },
    {
        id: 14,
        img: twilightImg,
        video: "https://youtu.be/uxjNDE2fMjI?si=xB5KbM7L6bqQPc4l",
        title: "Twilight",
        info:
        "A teenage girl falls in love with a mysterious boy at her new school, who turns out to be a vampire, leading to a dangerous and romantic conflict between their worlds.",
        year: 2008,
        genre: "fantasy, romance",
        rating: 5.2
    },
    {
        id: 15,
        img: grownUpsImg,
        video: "https://youtu.be/e01NVCveGkg?si=-BhauPhOJdt64jsO",
        title: "Grown Ups",
        info:
        "Five childhood friends reunite after their basketball coach passes away, spending a weekend with their families full of laughs and reflections on adulthood.",
        year: 2010,
        genre: "comedy",
        rating: 6.0
    },
    {
        id: 16,
        img: howlsImg,
        video: "https://youtu.be/iwROgK94zcM?si=xA8uBXfvQ2c6bG-H",
        title: "Howl's Moving Castle",
        info:
        "A young woman cursed with aging by a witch encounters a mysterious wizard named Howl and embarks on an enchanted journey involving magic, war and self‑discovery.",
        year: 2004,
        genre: "animation, fantasy, adventure",
        rating: 8.2
    },
    {
        id: 17,
        img: midnightRunnersImg,
        video: "https://youtu.be/XJf3lqjosUo?si=_5cLXZYQZulXFKr3",
        title: "Midnight Runners",
        info:
        "Two detectives on a long night shift stumble upon a dangerous conspiracy that pushes them to their limits as they race to uncover the truth before dawn.",
        year: 2018,
        genre: "action, thriller",
        rating: 6.5
    },
    {
        id: 18,
        img: parasite,
        video: "https://youtu.be/SEUXfv87Wpk?si=evBrnZnvElanP8ON",
        title: "Parasite",
        info:
        "A poor family cons their way into working for a wealthy household but soon discover that the divide between rich and poor hides shocking and dangerous secrets.",
        year: 2019,
        genre: "thriller, drama",
        rating: 8.6
    },
    {
        id: 19,
        img: shutterIslandImg,
        video: "https://youtu.be/v8yrZSkKxTA?si=NuFkbeO0wjCOPzID",
        title: "Shutter Island",
        info:
        "U.S. Marshals investigate the disappearance of a patient from a secluded psychiatric facility, uncovering unsettling truths about the island and their own pasts.",
        year: 2010,
        genre: "mystery, thriller",
        rating: 8.2
    },
    {
        id: 20,
        img: hobbitImg,
        video: "https://youtu.be/JTSoD4BBCJc?si=SJdHPHXEdTi-oRXY",
        title: "The Hobbit",
        info:
        "Bilbo Baggins, a reluctant hobbit, joins a company of dwarves on a quest to reclaim their homeland from a fearsome dragon, discovering courage and cunning along the way.",
        year: 2012,
        genre: "fantasy, adventure",
        rating: 7.8
    }
]

export default movies;