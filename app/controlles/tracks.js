const { httpError } = require('../helpers/handleError')
const userModel = require('../models/users')
const PORT = process.env.PORT || 3000
const URL_PUBLIC = process.env.URL_PUBLIC || '/'
const getItems = async(req, res) => {
    try {
        const listAll = [{
                "_id": 1,
                "name": "Getting Over",
                "album": "One Love",
                "cover": "https://i1.sndcdn.com/artworks-000031906244-0bdtmk-t500x500.jpg",
                "artist": {
                    "name": "David Guetta",
                    "nickname": "David Guetta",
                    "nationality": "FR"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track.mp3`
            },
            {
                "_id": 2,
                "name": "Snow Tha Product || BZRP Music Sessions #39",
                "album": "BZRP Music Sessions",
                "cover": "https://is5-ssl.mzstatic.com/image/thumb/Features125/v4/9c/b9/d0/9cb9d017-fcf6-28c6-81d0-e9ac5b0f359e/pr_source.png/800x800cc.jpg",
                "artist": {
                    "name": "Snow",
                    "nickname": "Snow",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-1.mp3`
            },
            {
                "_id": 3,
                "name": "Calypso (Original Mix)",
                "album": "Round Table Knights",
                "cover": "https://cdns-images.dzcdn.net/images/cover/1db3f8f185e68f26feaf0b9d72ff1645/350x350.jpg",
                "artist": {
                    "name": "Round Table Knights",
                    "nickname": "Round Table Knights",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-2.mp3`
            },
            {
                "_id": 4,
                "name": "Bad Habits",
                "album": "Ed Sheeran",
                "cover": "https://www.lahiguera.net/musicalia/artistas/ed_sheeran/disco/11372/tema/25301/ed_sheeran_bad_habits-portada.jpg",
                "artist": {
                    "name": "Ed Sheeran",
                    "nickname": "Ed Sheeran",
                    "nationality": "UK"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-4.mp3`
            },
            {
                "_id": 5,
                "name": "BEBE (Official Video)",
                "album": "Giolì & Assia",
                "cover": "https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc",
                "artist": {
                    "name": "Giolì & Assia",
                    "nickname": "Giolì & Assia",
                    "nationality": "IT"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-3.mp3`
            },
            {
                "_id": 6,
                "name": "T.N.T. (Live At River Plate, December 2009)",
                "album": "AC/DC",
                "cover": "https://cdns-images.dzcdn.net/images/cover/ba5eaf2f3a49768164d0728b7ba64372/500x500.jpg",
                "artist": {
                    "name": "AC/DC",
                    "nickname": "AC/DC",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-5.mp3`
            },
            {
                "_id": 7,
                "name": "50 Cent - Candy Shop (feat. Olivia)",
                "album": "50 Cent",
                "cover": "https://i.scdn.co/image/ab67616d0000b27391f7222996c531b981e7bb3d",
                "artist": {
                    "name": "50 Cent",
                    "nickname": "50 Cent",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-6.mp3`
            },
            {
                "_id": 8,
                "name": "Bésame💋",
                "album": "Valentino Ft MTZ Manuel Turizo (Video Oficial)",
                "cover": "https://i1.sndcdn.com/artworks-000247627460-1hqnjr-t500x500.jpg",
                "artist": {
                    "name": "Valentino",
                    "nickname": "Valentino",
                    "nationality": "CO"
                },
                "duration": {
                    "start": 0,
                    "end": 333
                },
                "url": `${URL_PUBLIC}/track-7.mp3`
            },

            {
                "_id": 9,
                "name": "This One Is for You (Rip Dad)",
                "album": "This One Is for You (Rip Dad)",
                "cover": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/9a/e3/4e/9ae34e5d-4742-7b9a-6a6d-1329faa11b56/195069406808_cover.jpg/1200x1200bb.jpg",
                "artist": {
                    "name": "YUNG CITY",
                    "nickname": "YUNG CITY",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 233
                },
                "url": `${URL_PUBLIC}/track-8.mp3`
            },
            {
                "_id": 10,
                "name": "This One Is for You (Rip Dad)",
                "album": "I Can't Handle Change",
                "cover": "https://images.genius.com/a1a25852de95b9dffc6f1326637a4fbd.600x600x1.jpg",
                "artist": {
                    "name": "ROAR",
                    "nickname": "ROAR",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 338
                },
                "url": `${URL_PUBLIC}/track-9.mp3`
            },
            {
                "_id": 11,
                "name": "Make You Mine",
                "album": "Stay Home Stay Safe",
                "cover": "data:image/png;base64,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",
                "artist": {
                    "name": "PUBLIC",
                    "nickname": "PUBLIC",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 335
                },
                "url": `${URL_PUBLIC}/track-10.mp3`
            },
            {
                "_id": 12,
                "name": "Fear And Misery",
                "album": "Fear And Misery",
                "cover": "https://akamai.sscdn.co/uploadfile/letras/fotos/6/9/3/5/6935a29944d351ae516b3066b26ea156.jpg",
                "artist": {
                    "name": "Joji",
                    "nickname": "Joji",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 224
                },
                "url": `${URL_PUBLIC}/track-11.mp3`
            },
            {
                "_id": 13,
                "name": "Nectar",
                "album": "R&B/Soul",
                "cover": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Joji_-_Nectar.png/220px-Joji_-_Nectar.png",
                "artist": {
                    "name": "Joji",
                    "nickname": "Joji",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 327
                },
                "url": `${URL_PUBLIC}/track-12.mp3`
            },
            {
                "_id": 14,
                "name": "Can You Hold Me",
                "album": "Mansion",
                "cover": "https://systemmusic.ir/wp-content/uploads/2022/08/nf-ft-britt-nicole-can-you-hold-me.jpg",
                "artist": {
                    "name": "NF FT Britt Nicole",
                    "nickname": "NF",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 338
                },
                "url": `${URL_PUBLIC}/track-14.mp3`
            },
            {
                "_id": 15,
                "name": "YEAH RIGTH",
                "album": "Ballads 1",
                "cover": "data:image/jpeg;base64,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",
                "artist": {
                    "name": "Joji",
                    "nickname": "Joji",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 254
                },
                "url": `${URL_PUBLIC}/track-15.mp3`
            },
            {
                "_id": 16,
                "name": "Es Amor",
                "album": "Más que amor",
                "cover": "https://i.scdn.co/image/ab67616d0000b273961b7402d88ca09b130a783b",
                "artist": {
                    "name": "Il Volo",
                    "nickname": "Il Volo",
                    "nationality": "IT"
                },
                "duration": {
                    "start": 0,
                    "end": 439
                },
                "url": `${URL_PUBLIC}/track-16.mp3`
            },
            {
                "_id": 17,
                "name": "Hospital For Souls",
                "album": "Sempiternal",
                "cover": "https://i1.sndcdn.com/artworks-000042166518-8cy90n-t500x500.jpg",
                "artist": {
                    "name": "Bring Me the Horizon",
                    "nickname": "Bring Me the Horizon",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 640
                },
                "url": `${URL_PUBLIC}/track-17.mp3`
            },
            {
                "_id": 18,
                "name": "Rigth Here",
                "album": "right here",
                "cover": "https://i1.sndcdn.com/artworks-weS85mgznJSbfBFF-fkEHPg-t500x500.jpg",
                "artist": {
                    "name": "Lil Pep",
                    "nickname": "Lil Pep",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 220
                },
                "url": `${URL_PUBLIC}/track-18.mp3`
            },
            {
                "_id": 19,
                "name": "Venom",
                "album": "BLACKMAGE",
                "cover": "https://i1.sndcdn.com/artworks-000665121637-ug93df-t500x500.jpg",
                "artist": {
                    "name": "GHOSTEMANE",
                    "nickname": "GHOSTEMANE",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 245
                },
                "url": `${URL_PUBLIC}/track-19.mp3`
            },
            {
                "_id": 20,
                "name": "Shadow Moses",
                "album": "Shadow Moses",
                "cover": "https://upload.wikimedia.org/wikipedia/en/b/b9/Shadow_moses_artwork.jpg",
                "artist": {
                    "name": "Bring Me The Horizon",
                    "nickname": "Bring Me the Horizon",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 528
                },
                "url": `${URL_PUBLIC}/track-20.mp3`
            },
            {
                "_id": 21,
                "name": "Anthen Of The Lonely",
                "album": "World We View",
                "cover": "https://i1.sndcdn.com/artworks-xGbqwMRWU7PO-0-t500x500.jpg",
                "artist": {
                    "name": "Nine Lashes",
                    "nickname": "Nine Lashes",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 401
                },
                "url": `${URL_PUBLIC}/track-21.mp3`
            },
            {
                "_id": 22,
                "name": "World So Cold",
                "album": "Anthem for the Underdog",
                "cover": "https://i.scdn.co/image/ab67616d0000b27370c52aceda2f28c0a5a4b99d",
                "artist": {
                    "name": "12 Stones",
                    "nickname": "12 Stones",
                    "nationality": "US"
                },
                "duration": {
                    "start": 0,
                    "end": 354
                },
                "url": `${URL_PUBLIC}/track-22.mp3`
            },
        ]
        res.send({ data: listAll })
    } catch (e) {
        httpError(res, e)
    }
}

const getItem = (req, res) => {

}

const createItem = async(req, res) => {
    try {
        const { name, age, email } = req.body
        const resDetail = await userModel.create({
            name,
            age,
            email
        })
        res.send({ data: resDetail })
    } catch (e) {
        httpError(res, e)
    }
}


const updateItem = (req, res) => {

}

const deleteItem = (req, res) => {

}

module.exports = { getItem, getItems, deleteItem, createItem, updateItem }