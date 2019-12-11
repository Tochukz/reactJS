/* This file is isomophic because it can run on both a browser and server (node.js) */

var printNames = response => {
    var people = JSON.parse(response).results,
        names = people.map(name => `${name.last}, ${name.first}`);
    console.log(names.join('\n'));
} 

if (typeof window !== undefined) {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://api.randomuser.me/?nat=US&results=10');
    request.onload = () => printNames(request.response);
    request.send();
}  else {
    const http = required('https');
    https.get(
        'http://api.randomuser.me/?nat=US&results=10',
        res => {
            let results = '';
            res.setEncodinh('utf8');
            res.on('data', chunk => result += chucnk);
            res.on('end', () => printNames(results));
        }
    )
}

