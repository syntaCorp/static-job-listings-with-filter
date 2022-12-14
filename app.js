const htmlData = [
    {
        "id": 1,
        "company": "Photosnap",
        "logo": "./images/photosnap.svg",
        "new": true,
        "featured": true,
        "position": "Senior Frontend Developer",
        "role": "Frontend",
        "level": "Senior",
        "postedAt": "1d ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["HTML", "CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 2,
        "company": "Manage",
        "logo": "./images/manage.svg",
        "new": true,
        "featured": true,
        "position": "Fullstack Developer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1d ago",
        "contract": "Part Time",
        "location": "Remote",
        "languages": ["Python"],
        "tools": ["React"]
    },
    {
        "id": 3,
        "company": "Account",
        "logo": "./images/account.svg",
        "new": true,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2d ago",
        "contract": "Part Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    },
    {
        "id": 4,
        "company": "MyHome",
        "logo": "./images/myhome.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "5d ago",
        "contract": "Contract",
        "location": "USA Only",
        "languages": ["CSS", "JavaScript"],
        "tools": []
    },
    {
        "id": 5,
        "company": "Loop Studios",
        "logo": "./images/loop-studios.svg",
        "new": false,
        "featured": false,
        "position": "Software Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "1w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["Ruby", "Sass"]
    },
    {
        "id": 6,
        "company": "FaceIt",
        "logo": "./images/faceit.svg",
        "new": false,
        "featured": false,
        "position": "Junior Backend Developer",
        "role": "Backend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "UK Only",
        "languages": ["Ruby"],
        "tools": ["RoR"]
    },
    {
        "id": 7,
        "company": "Shortly",
        "logo": "./images/shortly.svg",
        "new": false,
        "featured": false,
        "position": "Junior Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["HTML", "JavaScript"],
        "tools": ["Sass"]
    },
    {
        "id": 8,
        "company": "Insure",
        "logo": "./images/insure.svg",
        "new": false,
        "featured": false,
        "position": "Junior Frontend Developer",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "2w ago",
        "contract": "Full Time",
        "location": "USA Only",
        "languages": ["JavaScript"],
        "tools": ["Vue", "Sass"]
    },
    {
        "id": 9,
        "company": "Eyecam Co.",
        "logo": "./images/eyecam-co.svg",
        "new": false,
        "featured": false,
        "position": "Full Stack Engineer",
        "role": "Fullstack",
        "level": "Midweight",
        "postedAt": "3w ago",
        "contract": "Full Time",
        "location": "Worldwide",
        "languages": ["JavaScript", "Python"],
        "tools": ["Django"]
    },
    {
        "id": 10,
        "company": "The Air Filter Company",
        "logo": "./images/the-air-filter-company.svg",
        "new": false,
        "featured": false,
        "position": "Front-end Dev",
        "role": "Frontend",
        "level": "Junior",
        "postedAt": "1mo ago",
        "contract": "Part Time",
        "location": "Worldwide",
        "languages": ["JavaScript"],
        "tools": ["React", "Sass"]
    }
];

//select parent container for all job post
let parentContainer = document.querySelector('.job-list');

//loop through properties and list on page. job list bordered tags
const jobInfoGetter = (jobSkillsInfo, id) => {
    jobSkillsInfo.forEach(jobSkill => {
        document.querySelector('.job-skills-list' + id).innerHTML += `<li class="req-skill">${jobSkill}</li>`;
    })
}

/* 
load imported data and
render content to page 
// */
htmlData.forEach((data) => {
    const jobSkillsInfo = new Array(data.role, data.level, ...data.languages, ...data.tools);

    parentContainer.innerHTML +=
        `<section class="post-card" style="${data.new && data.featured ? ' border-left: 5px solid #5CA5A5;' : ''}">

        <div class="job-icon">
            <img src="${data.logo}" alt="${data.company}">
            </div>
            
            <div class="job-details">
                <div class="post-details">
                <span class="company">${data.company}</span>
                <span class="new-alert" style ="${data.new ? "display: inline-block" : "display: none"}">${data.new ? 'NEW!' : ''}</span>
                <span class="featured-alert"  style ="${data.featured ? "display: inline-block" : "display: none"}">${data.featured ? 'Featured' : ''}</span>
            </div>
        
            <div class="position">                  
                <p>${data.position}</p>
            </div>

            <div class="post-info">
            <ul>
                <li class="post-desc day">${data.postedAt} &#8226;</li>
                <li class="post-desc job-type">${data.contract} &#8226;</li>
                <li class="post-desc location">${data.location}</li>
            </ul>
            </div>
       </div>
       <div class="horizontal-line"></div>
        <div class="job-skills">
            <ul class="job-skills-list${data.id}"></ul>
        </div>
    </section>`;
    jobInfoGetter(jobSkillsInfo, data.id)
});

//filtered jobs bar
const searchBox = document.querySelector('#searchBar ul');

//job filtering text array
let jobFilter = [];
let list = [];

const jobSkills = document.querySelectorAll(`[class^="job-skills-list"] > li`)

const displaySearchItem = (searchItem, lists) => {
    searchBox.parentElement.style.display = "flex";
    searchItem.forEach(item => searchBox.innerHTML += item);
    lists.map(list => {
        Array.from(parentContainer.children)
            .filter(postCard => !postCard.textContent.includes(list))
            .forEach(card => { card.classList.add('none') })
    })
}

//job post filter event handlig
jobSkills.forEach(e => {
    e.addEventListener('click', (event) => {
        jobFilter.push(event.target.innerText);

        //filter clicked elements - eliminate repitition
        list = jobFilter.filter((item, index) => jobFilter.indexOf(item) === index);

        //store filtered items in this array
        let tags = [];
        list.map((value, index) => tags.push(`<li class="filtered-item filtered-item${index}">${value}<span class="closeBtn closeBtn${index}" onclick="closehandler(${index})"><img src="./images/icon-remove.svg" alt="close button"></span></li>`));

        //set ul to empty 
        searchBox.innerHTML = '';
        displaySearchItem(tags, list);
    })
})

//filtered skills close button event handler
const closehandler = (id) => {
    const selectedList = document.querySelector('.filtered-item' + id);
    const lists = list;
    const index = lists.indexOf(`${selectedList.innerText}`);
    if (index > -1) lists.splice(index, 1);

    Array.from(parentContainer.children)
        .forEach(card => { card.classList.remove('none') });

    lists.map(list => {
        Array.from(parentContainer.children)
            .filter(postCard => !postCard.textContent.includes(list))
            .forEach(card => { card.classList.add('none') })
    })

    let tags = [];
    lists.map((value, index) => tags.push(`<li class="filtered-item filtered-item${index}">${value}<span class="closeBtn closeBtn${index}" onclick="closehandler(${index})"><img src="./images/icon-remove.svg" alt="close button"></span></li>`));

    //set ul to empty 
    searchBox.innerHTML = '';
    tags.forEach(item => searchBox.innerHTML += item);
    lists.length == 0 ? searchBox.parentElement.style.display = "none" : '';
    jobFilter = lists;
    // displaySearchItem(tags, list);
}

//clear button action
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', (event) => {
    Array.from(parentContainer.children)
        .forEach(card => { card.classList.remove('none') });

    jobFilter = [];
    searchBox.parentElement.style.display = "none";
})
