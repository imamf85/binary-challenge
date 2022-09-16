fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => {


        if (res.status != 200) {
            console.log('aduuh' + res.status);
            return
        }


        res.json()
            .then((res) => {
            console.log(res);
            changeElement(res)
        }
            )

    })

    .catch((err) => console.log(err));

let changeElement = (data) => {

    let areaArticle = document.getElementById('area');
    let mainDiv = document.createElement('div');
    let elementFirstChild = document.createElement('span');
    let elementSecondChild = document.createElement('br');
    let elementThirdChild = document.createElement('span');

    areaArticle.innerHTML="";

    for (let i = 0; i < data.length; i++) {

        let boxGrid = areaArticle.append(mainDiv);
        mainDiv.className= 'box';

        mainDiv.append(elementFirstChild,elementSecondChild,elementThirdChild);

        elementFirstChild.innerHTML= data[i].title;
        elementThirdChild.innerHTML= data[i].completed ? 'Complete' : 'Not complete';
        
        elementThirdChild.style.color = data[i].completed ? 'Green' : 'Red';
    
        
    }

    
   


}