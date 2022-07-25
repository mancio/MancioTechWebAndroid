export const handleError = function (error){
    if(error.response.status){
        const number = error.response.status;
        if(number === 429) {
            window.alert("Too many requests, please try later");
        }
        if(number === 400){
            window.alert("Not working");
        }
    }else {
        window.alert("Something got wrong");
    }
}