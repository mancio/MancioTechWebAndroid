const emoticons = ['๐คน๐ผ','๐คน๐ผโโ','๐ง๐ฝโโ','๐','โโ๏ธ','๐ด๐ฟ','๐','๐ณ','๐','๐๐ฟ','โ๏ธ','๐งธ','๐'];

export const getRandEmoticons = function (){
    return emoticons[Math.floor(Math.random() * emoticons.length)];
}