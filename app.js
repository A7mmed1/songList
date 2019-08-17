var app = new Vue({
    el: '#app',
    data: {
        songs:

             [
                 {songName:' I am the one ', artist :'Justin Bieber'},
                 {songName:'When i am Gone',artist: 'Eminem'}


            ],
            newSong :{songName:'', artist :''},
    },
    methods: {
        addSong() {
            this.songs.splice(0,0,{songName:this.newSong.songName,artist:this.newSong.artist});
            this.newSong = {songName:'' , artist : ''};



        }
    }
})
