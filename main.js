prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 300,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(' #camera ');

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result_div").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 Version:', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0JNYvlyZX/model.json", modelLoaded);

function modelLoaded() {
    console.log('Model Loaded');
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is " + prediction_1;
    speak_data_2 = "And the Second Prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}