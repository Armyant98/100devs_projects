//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods
class NetflixShow {
    constructor(name, seasons, episodes, genre){
        this.name = name
        this.seasons = seasons
        this.episodes = episodes
        this.genre = genre
    }

    play(){
        alert('lets start baby')
    }

    pause(){
        alert('go pee')
    }

    rewind(){
        alert('reverse reverse!')
    }
}

const Ozark = new NetflixShow('Ozark', 4, 40, 'Drama / Thriller')