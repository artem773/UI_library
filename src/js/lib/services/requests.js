import $ from "../core";

$.prototype.get = async function(url, dataTypeAnswear = 'json'){
    let res = await fetch(url);

    if(!res.ok){
        throw new Error(`Could not fetch ${url}, status ${res.status}`);
    }

    switch (dataTypeAnswear){
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case ' blob':
            return await res.blob();
    }
};

$.prototype.post = async function(url, data, dataTypeAnswear = 'text'){
    let res = await fetch(url, {
            method: "POST",
            body: data
    });

    switch (dataTypeAnswear){
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case ' blob':
            return await res.blob();
    }
}
