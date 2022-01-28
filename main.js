function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lbKrNLlyj/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if (error){
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img = document.getElementById('dog');
        img1 = document.getElementById('cat');
        img2 = document.getElementById('lion');
        img3 = document.getElementById('cow');
        
        if(results[0].label == "bark") {
            img.src = 'https://media.giphy.com/media/Uw3cy3b2R7Bm0/giphy.gif';
            img1.src = 'cat.png';
            img2.src = 'lion.png'; 
            img3.src = 'cow.png';  
        } else if (results[0].label =="meowing") {
            img.src = 'dog.png'; 
            img1.src = 'https://media.giphy.com/media/iiE4JfK3mVdATsb2fx/giphy.gif'; 
            img2.src = 'lion.png'; 
            img3.src = 'cow.png'; 
        } else if (results[0].label == "roar") {
            img.src = 'dog.png'; 
            img1.src = 'cat.png'; 
            img2.src = 'https://media.giphy.com/media/ZkBcyGcNwNUUU/giphy.gif'; 
            img3.src = 'cow.png'; 
        }
      else if (results[0].label == "Mooing") {
        img.src = 'dog.png'; 
        img1.src = 'cat.png'; 
        img2.src = 'lion.png'; 
        img3.src = 'https://media.giphy.com/media/eGxZNRietHrgQXKKOg/giphy.gif'; 
    
    }
    else{
        img.src = 'dog.png'; 
        img1.src = 'cat.png'; 
        img2.src = 'lion.png'; 
        img3.src = 'cow.png'; 
    }
        
    }
}