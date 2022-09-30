const ol = document.querySelector("#list");
const links = [
    {
        label: "Week 1 notes",
        url: "week1/index.html",
        description: "Local Storage and Master Mobile UX"
    },
    {
        label: "Week 2 notes",
        url: "week2/index.html",
        description: "Programming Basics, Arrays, Functions"
    },
    {
        label: "Week 3 notes",
        url: "week3/index.html",
        description: "Objects, DOM, Events"
    }
];

links.forEach(link => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    let div = document.createElement("div");
    a.setAttribute("href", link.url);
    a.innerHTML = link.label;
    div.innerHTML = link.description;

    div.setAttribute("class", "description");

    li.append(a);
    li.append(div);
    ol.append(li);
});




