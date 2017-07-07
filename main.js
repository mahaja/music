	function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
	
	
	
	
	function toggleSong() {
				var song = document.querySelector('audio');
				if(song.paused == true) {
				console.log('Playing');
				$('.play-icon').removeClass('fa-play').addClass('fa-pause');
				song.play();
				}
				else {
				console.log('Pausing');
				$('.play-icon').removeClass('fa-pause').addClass('fa-play');
				song.pause();
				}
				} 
				
				        function updateCurrentTime() {
						var song = document.querySelector('audio');
						var currentTime = Math.floor(song.currentTime);
						currentTime = fancyTimeFormat(currentTime);
						var duration = Math.floor(song.duration);
						duration = fancyTimeFormat(duration)
						$('.time-elapsed').text(currentTime);
						$('.song-duration').text(duration);
					}
					
					
					function addSongNameClickEvent(songName,position) {
					var id = '#song' + position;
							$(id).click(function() {
							var audio = document.querySelector('audio');
							var currentSong = audio.src;
							if(currentSong.search(songName) != -1)
							{
							toggleSong();
							}
							else {
							audio.src = songName;
							toggleSong();
							}
							});
                        }

						
				                window.onload = function() {
					         	updateCurrentTime();
								setInterval(function() {
								updateCurrentTime();
								},1000);
								
								 
								// var songList = ['closer song', 'Humma Song', 'Na Ja Na Ja', 'Dont let me down', 'Cheap Thrills', 'Shape of you', 'Tove Lo', 'Worth it']; 
								// var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3', 'song5.mp3', 'song6.mp3', 'song7.mp3', 'song8.mp3'];
								// var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4', 'Artist #5', 'Artist #6', 'Artist #7', 'Artist #8'];
                                // var artistList = ['Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi','Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
							    //var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil','Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
                               // var durationList = ['2:56','3:15','2:34','2:29','2:56','3:15','2:34','2:29'];
									var songs = [{
										'name': 'Closer song',
										'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
										'album': 'Badrinath ki Dulhania',
										'duration': '2:56',
									   'fileName': 'song1.mp3'
									},
									{
										'name': 'Humma Song',
										'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
										'album': 'Ok Jaanu',
										'duration': '3:15',
										'fileName': 'song2.mp3'
									},
									{
										'name': 'Na Ja Na Ja',
										'artist': 'Arijit Singh',
										'album': 'Befikre',
										'duration': '2:34',
										'fileName': 'song3.mp3'
									},
									{
										'name': 'Dont let me down',
										'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
										'album': 'Ae Dil Hai Mushkil',
										'duration': '2:29',
										'fileName': 'song4.mp3'
									},
									 {
										'name': 'Cheap Thrills',
										'artist': 'Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi',
										'album': 'Badrinath ki Dulhania',
										'duration': '2:56',
									   'fileName': 'song5.mp3'
									},
									{
										'name': 'Shape of you',
										'artist': 'Badshah, Jubin Nautiyal, Shashaa Tirupati',
										'album': 'Ok Jaanu',
										'duration': '3:15',
										'fileName': 'song6.mp3'
									},
									{
										'name': 'Tove Lo',
										'artist': 'Arijit Singh',
										'album': 'Befikre',
										'duration': '2:34',
										'fileName': 'song7.mp3'
									},
									{
										'name': 'Worth it',
										'artist': 'Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi',
										'album': 'Ae Dil Hai Mushkil',
										'duration': '2:29',
										'fileName': 'song8.mp3'
									}]
									
								for(var i =0; i < songs.length;i++) {
									var obj = songs[i];
									var name = '#song' + (i+1);
									var song = $(name);
									song.find('.song-name').text(obj.name);
									song.find('.song-artist').text(obj.artist);
									song.find('.song-album').text(obj.album);
									song.find('.song-length').text(obj.duration);
									addSongNameClickEvent(obj.fileName,i+1);
    }								 
								 
								//addSongNameClickEvent(fileNames[0],1);
								//addSongNameClickEvent(fileNames[1],2);
								//addSongNameClickEvent(fileNames[2],3);
								//addSongNameClickEvent(fileNames[3],4);
								//addSongNameClickEvent(fileNames[4],5);
								//addSongNameClickEvent(fileNames[5],6);
								//addSongNameClickEvent(fileNames[6],7);
								
								//for (var i = 0; i < fileNames.length ; i++) {
								//addSongNameClickEvent(fileNames[i],i+1);
							         //} 
								
									
									
		                          }
				
				
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
						$('.play-icon').on('click', function() {
							toggleSong();
						});
						
						
						$('body').on('keypress', function(event) {
									if (event.keyCode == 32) {
										toggleSong();
									}
								});