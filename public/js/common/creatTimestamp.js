module.exports = function (){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let str = `${year}${month < 10 ? '0' + month : month}${day < 10 ? '0' + day : day}${hours < 10 ? '0' + hours : hours}${minutes < 10 ? '0' + minutes : minutes}${seconds < 10 ? '0' + seconds : seconds}`;
    return str
}