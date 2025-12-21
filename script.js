const users = [

  {
    fullName: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "UI/UX Designer",
    description: "Creative designer focused on user-centered design and clean interfaces.",
    tags: ["UI Design", "UX", "Figma", "Design Systems"]
  },
  {
    fullName: "Michael Chen",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Data Scientist",
    description: "Data-driven problem solver with experience in machine learning and analytics.",
    tags: ["Python", "Machine Learning", "Data Analysis", "AI"]
  },
  {
    fullName: "Sara Williams",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Content Creator",
    description: "Video creator and storyteller focused on tech education and productivity.",
    tags: ["YouTube", "Video Editing", "Content Creation", "Tech"]
  },
  {
    fullName: "Rahul Verma",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    profession: "Electrical Engineer",
    description: "Electronics engineer with expertise in VLSI design and embedded systems.",
    tags: ["VLSI", "Embedded Systems", "Electronics", "Engineering"]
  }
];

var sum = ''

users.forEach(function(elem){

   sum = sum + `  <div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullName}</h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
    </div>`
})

var main = document.querySelector('main')

main.innerHTML = sum




