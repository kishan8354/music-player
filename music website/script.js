let pop_song_lef=document.getElementById('pop_song_left');
let pop_song_righ=document.getElementById('pop_song_right');
let pop_song=document.getElementByClassName('pop_songs')[0];




pop_song_righ.addEventListener('click',() =>{
	pop_song.scrollLeft+=330;
});
pop_song_lef.addEventListener('click',() =>{
	pop_song.scrollLeft-=330;
});