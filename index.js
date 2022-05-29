const url = 'https://picsum.photos/v2/list'

// ----------------------------- fetch function --------------------------------

const fetchData = async() => {
    let response = await fetch(url).then(response => response.json())
                        .catch(error => console.log(error));
    return response;
}

// ----------------------------- render function -------------------------------

const renderImage = async() => {
   let imageCollection =  await fetchData();
   let html = '';
    imageCollection.map(image => {
        let htmlSection = `<img src="${image.download_url}" style="width:${image.width}"/>`;

        html += htmlSection;
    })

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderImage();