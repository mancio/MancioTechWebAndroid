const dashkey = 'dashtext';

export const getText = function (){
    return localStorage.getItem(dashkey) || '';
}

export const saveText = function (text){
    localStorage.setItem(dashkey, text);
}

