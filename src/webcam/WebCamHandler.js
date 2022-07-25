const webcam = [
    {
        src: 'https://www.youtube.com/embed/-Z4W0iltQ5U',
        title: 'LEŚNY ZAKĄTEK A forest nook for birds and wild animals - live camera',
        country: 'Poland',
        tag: 'bird_lesny'
    },
    {
        src: 'https://5d84fe297ee2b.streamlock.net/lask/lask.stream/playlist.m3u8',
        title: 'Łaskie Bociany',
        country: 'Poland',
        tag: 'bird_lask'
    },
    {
        src: 'https://5d84fe297ee2b.streamlock.net/rakowo/rakowo.stream_720p/playlist.m3u8',
        title: 'Rakowo-Czachy Bociany',
        country: 'Poland',
        tag: 'bird_rakowo'
    },
    {
        src: 'https://5d84fe297ee2b.streamlock.net/wegleszyn/wegleszyn.stream/playlist.m3u8',
        title: 'Węgleszyn Bociany',
        country: 'Poland',
        tag: 'bird_wegl'
    },
    {
        src: 'https://1561848016.rsc.cdn77.org/live/YgL921.stream/playlist.m3u8',
        title: 'Polikat, ul. Witosa 4, 36-200 Brzozów, woj. podkarpackie',
        country: 'Poland',
        tag: 'bird_poli'
    },
    {
        src: 'https://cdn2.bieszczady.live/hls-live/bocianyCzarna/playlist.m3u8',
        title: 'Czarna Górna Bociany',
        country: 'Poland',
        tag: 'bird_gorna'
    },
    {
        src: 'http://hoktastream1.webcamera.pl/burnit_cam_fb8ba3/burnit_cam_fb8ba3.stream/playlist.m3u8',
        title: 'Widok na gniazdo bociana umieszczone na czynnym kominie piekarni, na specjalnej platformie',
        country: 'Poland',
        tag: 'bird_umi'
    },
    {
        src: 'https://www.youtube.com/embed/MtGUTs_HgcE',
        title: 'LIVE [4K] Backyard Bird Feeder Camera! (*Cardinals, Jays, Chickadees*)',
        country: 'OHIO - USA',
        tag: 'bird_feeder'
    },
    {
        src: 'https://www.youtube.com/embed/sqOmhBGk-tY',
        title: 'Deer Pantry "Ryan\'s Bird Buffet',
        country: 'Brownville - USA',
        tag: 'bird_buffet'
    },
    {
        src: 'https://www.youtube.com/embed/dc2xQYSsOjA',
        title: 'PixCams.com Wildlife Cam 2 Live Stream',
        country: 'USA',
        tag: 'bird_pix'
    },
    {
        src: 'https://www.youtube.com/embed/6x14VCXNV5w',
        title: 'Nuuksio live - winter birds feeding in South of Finland',
        country: 'Finland',
        tag: 'bird_Nuuksio'
    },
    {
        src: 'https://www.youtube.com/embed/uE5CFNlUTG0',
        title: 'Gniazdo Bocianie - Telewizja Sokółka [NA ŻYWO] | IP Camera: Stork\'s nest [LIVE]',
        country: 'Poland',
        tag: 'bird_tel'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/tyrawa-woloska/latest.mp4',
        title: 'Tyrawa Wołoska - gniazdo bociana',
        country: 'Poland',
        tag: 'bird_tyrawa'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/klekusiowo/latest.mp4',
        title: 'Klekusiowo - widok na gniazdo bociana białego',
        country: 'Poland',
        tag: 'bird_kle'
    },
    {
        src: 'https://imageserver.webcamera.pl/rec/pszczoly/latest.mp4',
        title: 'Pszczoły na żywo Warsawa',
        country: 'Poland',
        tag: 'api'
    },
    {
        src: 'https://hoktastream2.webcamera.pl/umgdansk_cam_11161c/umgdansk_cam_11161c.stream/playlist.m3u8',
        title: 'Gdańsk - Widok na rzekę Motławę obraz na żywo',
        tag: 'gdansk_Motławę'
    },
    {
        src: '    https://5ee71ff03d9d1.streamlock.net:4444/volta/gda_molo.stream/playlist.m3u8',
        title: 'Gdańsk - Widok na plażę w Brzeźnie',
        tag: 'gdansk_plaze'
    },
    {
        src: 'https://www.youtube.com/embed/jC9bUa7J2Ds',
        title: 'Buffaure - Pala del Geiger mt. 2326',
        country: 'Italy',
        tag: 'buff'
    },
    {
        src: 'https://lookcam.live/player/MkpBtMYG6E/',
        title: 'Fiddlers - squirrel aviary',
        country: 'Where?',
        tag: 'squirrels'
    },
    {
        src: 'https://content.jwplatform.com/previews/meoYAvxh-Ov8ubaf2',
        title: 'Panda Cam',
        country: 'Somewhere in the world',
        tag: 'panda'
    }
];

let currentWebCamPos = 0

export const setAnotherWebCam = function (direction){
    if(direction === '0') currentWebCamPos++;
    if(direction === '180') currentWebCamPos--;
    currentWebCamPos = Math.abs(currentWebCamPos%webcam.length);
    console.log('current webcam: ' + currentWebCamPos);
}

export const getCurrentWebCam = function (){
    console.log('current webcam requested: ' + webcam[currentWebCamPos]);
    return webcam[currentWebCamPos];
}

export const getWebCamList = function (){
    return webcam;
}

export const getCamByTag = function (tag){
    return webcam.find((item) => item.tag === tag);
}

export const getRandomCamTag = function (){
    let rand = Math.floor(Math.random() * webcam.length);
    return webcam[rand].tag;
}