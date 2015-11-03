//
// // Browser support
window.AudioContext = window.AudioContext || window.webkitAudioContext;
navigator.getUserMedia = navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia;
// var microphone;
// var analyser;
// var frequencyData;
//
// var audio = new AudioContext();  //set AudioConext variable for node setup
//
// var analyserGl = audio.createAnalyser();
//
//
// var userVoice = navigator.getUserMedia ({audio: true},//must pass 3 functions to get this to execute - input type, source and dest nodes and error message
//   function(stream){
//     var microphone= audio.createMediaStreamSource(stream);//Set input node
//     var analyser = audio.createAnalyser();
//     analyser.fftsize= 2048;
//     microphone.connect(analyser);// setting output destination
//     analyser.connect(audio.destination);
//     var frequencyData = new Uint8Array(analyser.frequencyBinCount);
//
//   },
//   function(){
//     consle.warn("error");
//   });
//
//   function update() {
//       // Schedule the next update
//       requestAnimationFrame(update);
//       // Get the new frequency data
//       analyser.getByteFrequencyData(frequencyData);
//       // Update the visualisation
//   }
//
//   // Kick it off...
//
//
//
//
//
//   // var audioCtx = new AudioContext();
//   // var analyser = audioCtx.createAnalyser();
//   // var freqArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array should be the same length as the frequencyBinCount
//   // analyser.getByteFrequencyData(dataArray);
//   //
//   // // Create an AudioNode from the stream.
//   //  mediaStreamSource = audioContext.createMediaStreamSource(stream);
//   //
//   //  // Connect it to the destination.
//   //  analyser = audioContext.createAnalyser();
//   //  analyser.fftSize = 2048;
//   //  mediaStreamSource.connect( analyser );
//   //  updatePitch();
//
//
// //
// // window.AudioContext = window.AudioContext ||
// //                       window.webkitAudioContext;
// //
// // var context = new AudioContext();
// //
// // navigator.getUserMedia({audio: true}, function(stream) {
// //   var microphone = context.createMediaStreamSource(stream);
// //   var filter = context.createBiquadFilter();
// //
// //   // microphone -> filter -> destination.
// //   microphone.connect(filter);
// //   filter.connect(context.destination);
// // }, errorCallback);

// Above were my attempts at using HTML 5 till I found WebAudiox
//
// var context;
// var microphone = new WebAudiox.LineOut(context);
// microphone.volume = 0.2;
//
// var analyser = context.createAnalyser();
// analyser.connect(microphone.destination);
// microphone.destination = analyser;
// analyser.fftSize = 1024;
// var myDataArray = new Float32Array(analyser.frequencyBinCount); // Float32Array should be the same length as the frequencyBinCount



//  function noteFromPitch( frequency ) {
// 	var noteNum = 12 * (Math.log( frequency / 440 )/Math.log(2) );
// 	return Math.round( noteNum ) + 69;
// }
//
// function frequencyFromNoteNumber( note ) {
// 	return 440 * Math.pow(2,(note-69)/12);


var context;
var microphone;
var analyser;
//
// var analyser = context.createAnalyser();
// analyser.connect(microphone.destination);
// microphone.destination = analyser;
// analyser.fftSize = 1024;
// var myDataArray = new Float32Array(analyser.frequencyBinCount);



$('.btn-success').on('click', function(){
  event.preventDefault();
  console.log(event.target);
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia ||
                         navigator.msGetUserMedia;
  navigator.getUserMedia ({audio: true}, function gotStream(stream){
    context = new AudioContext();
    var analyser = context.createAnalyser();
    microphone = context.createMediaStreamSource(stream);
    microphone.connect(analyser);
    process();
  },
    function(){
      consle.warn("error");
    });
    function process(){
      setInterval(function(){
        FFTData = new Float32Array(analyser.frequencyBinCount);
        analyser.getFloatFrequencyData(FFTData);
        console.log(FFTData[0]);
      }, 10);
    }
});




$('.btn-warning').on('click', function(){
  // event.preventDefault();
  // var muteGain	= context.createGain();
	// muteGain.connect(context.destination);
	// context.destination= muteGain;
	// this.isMuted	= false;
	// this.toggleMute = function(){
	// 	this.isMuted		= this.isMuted ? false : true;
	// 	muteGain.gain.value	= this.isMuted ? 0 : 1;
	// }.bind(this);
});

$('.btn-danger').on('click', function(){
  event.preventDefault();
  context.stop;

});
