
let currentPage = 1;
let limitElement = 10;
let allData = [];

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
        if (res.status != 200) {
            console.log('aduuh' + res.status);
            return;
        }

        res.json().then((res) => {
            allData = res
            changeElement(res);
        });
    })

    .catch((err) => console.log(err));

let changeElement = (data) => {
    let newEl = '';
    
    let modifyDatas = data.slice((currentPage-1)*limitElement,(currentPage)*limitElement);

    modifyDatas.forEach((datum) => {
        newEl += `
            <div class="box">
                <span class ="center">${datum.title}</span>
                <br />
                <span style="color: ${datum.completed ? 'green' : 'red'}">${
            datum.completed ? 'Complete' : 'Not Complete'
        }</span>
            </div>
        `;
    });


    let areaArticle = document.getElementById('area');
    areaArticle.innerHTML = newEl;
};

let nextPage = () => {

    currentPage += 1

    document.getElementById("page").innerHTML = currentPage ;

    changeElement(allData);

    
}

let previousPage = () => {

    currentPage -= 1

    document.getElementById("page").innerHTML = currentPage ;

    changeElement(allData);

    
}

let chooseYourLimit = (e) => {

    limitElement = e.target.value;

    changeElement(allData);
}

let searchKeyword = (e) => {

    const textSearch = e.target.value;

    const filteredData = allData.filter((datum) => {
        return (datum.title.includes(textSearch) || datum.completed.includes(textSearch)
        );
    });

    changeElement(filteredData);

}

document.getElementById('dropdownPages').addEventListener("change", chooseYourLimit);
document.getElementById('goAhead').addEventListener("click", nextPage);
document.getElementById('getBack').addEventListener("click", previousPage);
document.getElementById('search').addEventListener("keyup", searchKeyword);



