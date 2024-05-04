// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function SetCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function GetCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') { c = c.substring(1); }
        if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
    }
    return "";
}

function EraseCookie(cname) {
    document.cookie = cname + '=; Max-Age=0; path=/;';
}

const direction = (url) => {
    window.location.href = (url);
}

const split = () => {
    const url = 'https://localhost:7179/questions/questions?examId=03c50238-cc70-4d9c-aaef-7c688e9b9209';

    // Sử dụng jQuery để tìm và lấy phần string sau "examId="
    const examIdString = $(location).attr('search').split('examId=')[1];

    // In ra kết quả
    console.log(examIdString);
}

const GetParamInURL = (key) => {
    let listParam = window.location.search.replace('?', '').split('&');
    if (listParam.length <= 0) return '';
    for (let i = 0; i < listParam.length; i++) {
        let pairKeyValue = listParam[i].split('=');
        if (pairKeyValue.length > 1) {
            if (pairKeyValue[0] === key)
            return pairKeyValue[1];
        }
    }
    return '';
}