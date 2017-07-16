                                      var songs = [{
										'name': 'Cheap Thrills',
										'artist': 'Sia ft.Sean',
										'album': 'Cheap Thrills',
										'duration': '3:31',
									    'fileName': 'song5.mp3',
									    'image' : 'song5.jpg'
									},
									
									{
										'name': 'Humma Song',
										'artist': 'Shraddha Kapoor',
										'album': 'Ok Jaanu',
										'duration': '3:15',
										'fileName': 'song2.mp3',
										'image' : 'song2.jpg'
									},
									{
									    'name': 'Na Ja Na Ja',
										'artist': 'Pav Dharia',
										'album': 'Na Ja Na Ja',
										'duration': '3:28',
										'fileName': 'song3.mp3',
										'image' : 'song3.jpg'
									},
										
									{
										'name': 'Love Me Like You Do',
										'artist': 'Elli Goulding',
										'album': 'Love Me Like You Do',
										'duration': '4:13',
										'fileName': 'song9.mp3',
										'image' : 'song9.png'
									},
					
										
									{
										'name': 'Dont let me down',
										'artist': 'ft.Daya',
										'album': 'The Chainsmokers',
										'duration': '3:28',
										'fileName': 'song4.mp3',
										'image' : 'song4.jpg'
									},
									
									{
										'name': 'Shape of you',
										'artist': 'Ed Sheeran',
										'album': 'Shape of you',
										'duration': '3:53',
										'fileName': 'song6.mp3',
										'image' : 'song6.jpg'
									},
									{
										'name': 'Tove Lo',
										'artist': 'TEGOS.RU',
										'album': 'Tove Lo',
										'duration': '2:32',
										'fileName': 'song7.mp3',
										'image' : 'song7.jpg'
									},
									{
										'name': 'Worth it',
										'artist': 'Fifth Harmony',
										'album': 'Worth it ft.kid lnk',
										'duration': '3:44',
										'fileName': 'song8.mp3',
										'image' : 'song8.jpg'
									}]	
										var currentSongNumber = 1;
										var willLoop = 0;
										var willShuffle = 0; // will use this soon
									
									function timeJump() {
									var song = document.querySelector('audio')
									song.currentTime = song.duration - 5;
								}
									
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
	
							function updateTimer(){
							var song =document.querySelector('audio');
							var ct=song.currentTime;
							var td=song.duration;
							var percentage=(ct/td)*100;
							$(".progress-filled").css('width',percentage+"%");
						}
						
						
						
						
						function setvolume(){
							var song = document.querySelector('audio');
							song.volume = slider.value/100;
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
				     function changeCurrentSongDetails(songObj) {
								// Code goes here
								 $('.current-song-image').attr('src','img/'+ songObj.image)
								 $('.current-song-name').text(songObj.name)
								 $('.current-song-album').text(songObj.album)
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
					
					
					function addSongNameClickEvent(songObj,position) {
				    var songName = songObj.fileName; // New Variable 
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
							changeCurrentSongDetails(songObj); // Function Call
							}
							});
                        }
						
						        function randomExcluded(min, max, excluded) {
								var n = Math.floor(Math.random() * (max-min) + min);
								if (n >= excluded) n++;
								return n;
							    }

						
						
				                window.onload = function() {
									
								changeCurrentSongDetails(songs[0]);
									
					         	updateCurrentTime();
								setInterval(function() {
								updateCurrentTime();
								updateTimer();
								},1000);				
								}
								
								 
								// var songList = ['Closer song', 'Humma Song', 'Na Ja Na Ja', 'Dont let me down', 'Cheap Thrills', 'Shape of you', 'Tove Lo', 'Worth it']; 
								// var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3', 'song5.mp3', 'song6.mp3', 'song7.mp3', 'song8.mp3'];
								// var artistList = ['Artist #1', 'Artist #2', 'Artist #3', 'Artist #4', 'Artist #5', 'Artist #6', 'Artist #7', 'Artist #8'];
                                // var artistList = ['Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi','Neha Kakkar, Monali Thakur, Ikka Singh, Dev Negi','Badshah, Jubin Nautiyal, Shashaa Tirupati','Arijit Singh','Nakash Aziz, Arijit Singh, Badshah, Jonita Gandhi'];
							    //var albumList = ['Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil','Badrinath ki Dulhania','Ok Jaanu','Befikre','Ae Dil Hai Mushkil'];
                               // var durationList = ['2:56','3:15','2:34','2:29','2:56','3:15','2:34','2:29'];
								
									
								for(var i =0; i < songs.length;i++) {
									var obj = songs[i];
									var name = '#song' + (i+1);
									var song = $(name);
									song.find('.song-name').text(obj.name);
									song.find('.song-artist').text(obj.artist);
									song.find('.song-album').text(obj.album);
									song.find('.song-length').text(obj.duration);
									addSongNameClickEvent(obj,i+1);
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
								
									$('#songs').DataTable({
									"scrollY": "200px",
									"scrollCollapse":true,
									"paging": false
								});
									
		                          
								  
								  
								 
				
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 3) {
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
						
									$('body').on('keypress',function(event) {
									var target = event.target;
									if (event.keyCode == 32 && target.tagName !='INPUT')
									{
										toggleSong();
									}
								});
								
								$('.fa-repeat').on('click',function() {
								$('.fa-repeat').toggleClass('disabled')
								willLoop = 1 - willLoop;
                             });
							 
							
							 

								$('.fa-random').on('click',function() {
									$('.fa-random').toggleClass('disabled')
									willShuffle = 1 - willShuffle;
								});
								
								 $('#slider').on('mousemove',function(){
								 setvolume();
							 });
							
								
								
								$('audio').on('ended',function() {
								var audio = document.querySelector('audio');
								if(currentSongNumber < 4) {
									var nextSongObj = songs[currentSongNumber];
									audio.src = nextSongObj.fileName; // Change Soure
									toggleSong(); // Play Next Song
									changeCurrentSongDetails(nextSongObj); // Update Image
									currentSongNumber = currentSongNumber + 1; // Change State
								}
								else {
									$('.play-icon').removeClass('fa-pause').addClass('fa-play');
									audio.currentTime = 0;
								}
							});
							
							
							
								$('audio').on('ended',function() {
								var audio = document.querySelector('audio');
								if (willShuffle == 1) {
									var nextSongNumber = randomExcluded(1,8,currentSongNumber); // Calling our function from Stackoverflow
									var nextSongObj = songs[nextSongNumber-1];
									audio.src = nextSongObj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongObj);
									currentSongNumber = nextSongNumber;
								}
								else if(currentSongNumber < 8) {
									var nextSongObj = songs[currentSongNumber];
									audio.src = nextSongObj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongObj);
									currentSongNumber = currentSongNumber + 1;
								}
								else if(willLoop == 1) {
									var nextSongObj = songs[0];
									audio.src = nextSongObj.fileName;
									toggleSong();
									changeCurrentSongDetails(nextSongObj);
									currentSongNumber =  1;
								}
								else {
									$('.play-icon').removeClass('fa-pause').addClass('fa-play');
									audio.currentTime = 0;
								}
							});
							
							
							
							 