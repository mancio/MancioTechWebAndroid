const emoticons = ['🤹🏼','🤹🏼‍♀','🧜🏽‍♂','🚀','‍✈️','🚴🏿','🙉','🐳','🏎','🏄🏿','☃️','🧸','🃏'];

export const getRandEmoticons = function (){
    return emoticons[Math.floor(Math.random() * emoticons.length)];
}