import avatarImg from "../assets/img/avatar.jpg"
import blackSwanImg from "../assets/img/black_swan.jpg"
import avatar2Img from "../assets/img/avatar2.jpg"
import avatar3Img from "../assets/img/avatar3.jpg"
import goneGirlImg from "../assets/img/gone_girl.jpg"
import girlInterruptedImg from "../assets/img/girl_interrupted.jpg"


const movies=[
    {
        id:1,
        img:avatarImg,
        video:"https://www.imdb.com/video/vi2953299993/?playlistId=tt1757678&ref_=tt_ov_ov_vi",
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
        info:"Nina is a talented but unstable ballerina on the verge of stardom. Pushed to the breaking point by her artistic director and a seductive rival, Nina's grip on reality slips, plunging her into a waking nightmare.",
        year:2010,
        genre:"psychological thriller",
        rating:8
    },

    {
        id:3,
        img:avatar2Img,
        title:"Avatar: The Way of Water",
        info:"Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        year:2022,
        genre:"science fiction, action-adventure, and fantasy",
        rating:7.5
    },

    {
        id:4,
        img:avatar3Img,
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
        info:"The husband of a missing woman becomes the main suspect in her disappearance.",
        year:2014,
        genre:"thriller",
        rating:8.1
    },

    {
        id:6,
        img:girlInterruptedImg,
        title:"Girl, interrupted",
        info:"Directionless teenager Susanna is rushed to Claymoore, a mental institution, after a supposed suicide attempt. There she befriends a group of troubled women who deeply influence her life.",
        year:1999,
        genre:"coming-of-age, psychological drama",
        rating:7.3
    }
]

export default movies;