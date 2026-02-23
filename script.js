const users = [
    {
        name: "Amisha Rathore",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAnZO-HbYIOIzEYS_uNiCS2YtyAn53nJeWbw&s",
        bio: "silent chaos in a loud world | not for everyone"
    },
    {
        name: "Rahul Mehta",
        pic: "https://photosbull.com/wp-content/uploads/2024/06/aesthetic-dp-48.jpg",
        bio: "living life one vibe at a time ✨"
    },
    {
        name: "Sneha Kapoor",
        pic: "https://wallpapers.com/images/thumbnail/girl-in-all-black-outfit-pfp-aesthetic-qb6mk3z43kkayw2w.jpg",
        bio: "coffee first, overthinking later ☕"
    },
    {
        name: "Arjun Verma",
        pic: "https://img.freepik.com/premium-photo/anime-boy-wi…ve-ai_901242-22381.jpg?semt=ais_hybrid&w=740&q=80",
        bio: "hustle quietly, shine loudly 💼"
    },
    {
        name: "Neha Sharma",
        pic: "https://www.ultraupdates.com/wp-content/uploads/2021/06/Aesthetic-profile-pictures-for-girl.jpg",
        bio: "soft heart, strong mind 🌸"
    },
    {
        name: "Karan Malhotra",
        pic: "	https://i.pinimg.com/1200x/24/b8/4a/24b84ae2ba85021c1338d6007ca0fbb7.jpg",
        bio: "work in progress 🚀"
    },
    {
        name: "Pooja Singh",
        pic: "https://i.pinimg.com/170x/ae/1f/40/ae1f40e66a1d39aa2c39d3c16aa6def1.jpg",
        bio: "collecting memories not things 📸"
    },
    {
        name: "Aditya Khanna",
        pic: "https://i.pinimg.com/736x/60/67/bb/6067bb057f1632fc1def109b3fc4e6d4.jpg",
        bio: "dream big | stay humble"
    },
    {
        name: "Ritika Joshi",
        pic: "	https://i.pinimg.com/736x/37/ba/4e/37ba4e5838238cc29a061000c707727a.jpg",
        bio: "simplicity is my superpower ✨"
    },
    {
        name: "Mohit Agarwal",
        pic: "	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjkA2Rut9QnqgEdPsBPuohN1Mgbce0NI6FbA&s",
        bio: "coding by day, gaming by night 🎮"
    },
    {
        name: "Ananya Gupta",
        pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhwDuzJ8I3z1jsvbwpNMDimWZ4_h-IRiECDQ&s",
        bio: "finding beauty in small moments 🌿"
    }
]
//show all users
//filter everytime after input 
//show filtered users
function show_users(arr){  //if we write here hard coded users then it becomes diffivult to filter and everytime all the data will be shown so array is created
    //****************** */
     let container = document.querySelector(".cards")
    container.innerHTML = ""
    /********************** */
    arr.forEach(function(user) {
        // Create main card div
        let card = document.createElement("div")
        card.className = "card"

// Create image
        let img = document.createElement("img")
        img.src = user.pic
        img.className = "bg-img"

// Create blurred layer
        let blurLayer = document.createElement("div")
        blurLayer.style.backgroundImage=`url(${user.pic})`;
        blurLayer.className = "blurred-layer"

// Create content div
        let content = document.createElement("div")
        content.className = "content"

// Create heading
        let h3 = document.createElement("h3")
        h3.innerText = user.name

// Create paragraph
        let p = document.createElement("p")
        p.innerText =user.bio

// Append elements properly
        content.appendChild(h3)
        content.appendChild(p)

        card.appendChild(img)
        card.appendChild(blurLayer)
        card.appendChild(content)

// // Add card to page (example: body)
        // document.querySelector(".cards").innerHTML=""
        document.querySelector(".cards").appendChild(card)
        
    });
} 
show_users(users)
let inp=document.querySelector(".inp")
inp.addEventListener("input",function(){
    let newUser=users.filter((user)=>{
        return user.name.startsWith(inp.value)

    })
    show_users(newUser)
})
