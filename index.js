


mapDataToUi('./data.json')

async function mapDataToUi(file){
    const resource = await fetch(file)
    const data  = await resource.json()

    let result = 0;


    data.forEach(obj => {
        const element = document.getElementById(obj?.category.toLowerCase())    
        element.textContent  = `${obj?.score || 0} / 100 `
        result += obj.score 

        //inserting the image in
        const img = document.createElement('img')
        img.src = obj.icon
        element.parentElement.insertBefore(img,element.parentElement.firstElementChild)
    });

    //setting the result 
    document.getElementById('result').textContent = ((result/data.length).toFixed())
    
}