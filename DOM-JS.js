fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {
        if (res.status != 200) {
            console.log('aduuh' + res.status);
            return;
        }

        res.json().then((res) => {
            console.log(res);
            changeElement(res);
            pageOne(res);
        });
    })

    .catch((err) => console.log(err));

let changeElement = (datas) => {
    let newEl = '';
    

    datas.forEach((data) => {
        newEl += `
            <div class="box">
                <span class ="center">${data.title}</span>
                <br />
                <span style="color: ${data.completed ? 'green' : 'red'}">${
            data.completed ? 'Complete' : 'Not Complete'
        }</span>
            </div>
        `;
    });

    let areaArticle = document.getElementById('area');
    areaArticle.innerHTML = newEl;
};

document.getElementById('goAhead').addEventListener("click", pageNext);

let pageOne = (datas) => {


}