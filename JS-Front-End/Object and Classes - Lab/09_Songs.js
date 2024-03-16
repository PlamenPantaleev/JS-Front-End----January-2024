function songs(songsInput) {
    const numberOfSongs = songsInput[0];

    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList;
            this.name = name;
            this.duration = duration;
        }
    }

    let songsArray = [];

    for (let i = 1; i < songsInput.length - 1; i++) {
        const currentSongData = songsInput[i].split('_');
        const typeList = currentSongData[0];
        const name = currentSongData[1];
        const duration = currentSongData[2];

        const song = new Song(typeList, name, duration);

        songsArray[i - 1] = song;
    }

    const typeListAll = songsInput[songsInput.length - 1];

    for (const currentSong of songsArray) {
        if (currentSong.typeList === typeListAll || typeListAll === "all") {
            console.log(currentSong.name);
        }
    }

}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
//     );

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )