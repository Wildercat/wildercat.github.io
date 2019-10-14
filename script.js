var bodyDiv = document.getElementById('pagebody');
function mkTag(tag, content) {
    ht = document.createElement(tag);
    ht.innerHTML = content;
    return ht;
}
async function main() {
    const NEWresponse = await fetch('new-article-content.json')
    const NEWdata = await NEWresponse.json();
    for (let i = NEWdata.content[0].length - 1; i >= 0; i--) {
        let art = document.createElement('article');
        art.setAttribute('class', 'row p-5');

        // postheader column
        let postHead = document.createElement('div');
        postHead.setAttribute('class', 'col-lg-3 border-right');
        // postheader title
        let postTitle = document.createElement('h2');
        postTitle.textContent = NEWdata.content[0][i].title;
        //postheader date
        let postDate = document.createElement('p');
        postDate.textContent = NEWdata.content[0][i].date;
        // append title and date to post header
        postHead.appendChild(postTitle);
        postHead.appendChild(postDate);


        // post body column
        let postBody = document.createElement('div');
        postBody.setAttribute('class', 'col-lg');

        NEWdata.content[0][i].body.map((section) => {
            let div = mkTag('div','');
            div.className = 'pb-3';
            let headerText = section.header;
            let textText = section.text;
            let headerP = mkTag('p','');
            // console.log(headerP);
            headerP.appendChild(mkTag('b', headerText));
            div.appendChild(headerP);
            div.appendChild(mkTag('p', textText));
            postBody.appendChild(div); 
            
        })

        // append everything to article
        art.appendChild(postHead);
        art.appendChild(postBody)

        // append article to body container
        bodyDiv.appendChild(art);
    }
    const response = await fetch('article-content.json')
    const data = await response.json();
    for (let i = data.content[0].length - 1; i >= 0; i--) {
        let art = document.createElement('article');
        art.setAttribute('class', 'row p-5');

        // postheader column
        let postHead = document.createElement('div');
        postHead.setAttribute('class', 'col-lg-3 border-right');
        // postheader title
        let postTitle = document.createElement('h2');
        postTitle.textContent = data.content[0][i].title;
        //postheader date
        let postDate = document.createElement('p');
        postDate.textContent = data.content[0][i].date;
        // append title and date to post header
        postHead.appendChild(postTitle);
        postHead.appendChild(postDate);


        // post body column
        let postBody = document.createElement('div');
        postBody.setAttribute('class', 'col-lg');
        postBody.innerHTML = data.content[0][i].body;

        // append everything to article
        art.appendChild(postHead);
        art.appendChild(postBody)

        // append article to body container
        bodyDiv.appendChild(art);
    }

}

main();









// one time use - converting content of article tags over to json, to build primitive CMS
// var jsonObj = {};
// var zeroArr = [];
// var artArr = [];
// var artObj = {
//     title: 'placeholder',
//     date: 'placeholder',
//     body: 'placeholder'
// };
// artArr.push(artObj);
// zeroArr.push(artArr);
// jsonObj = {content: zeroArr};
// var testJson = JSON.stringify(jsonObj);

// var jsonObj = JSON.parse(testJson);

// console.log(jsonObj);


