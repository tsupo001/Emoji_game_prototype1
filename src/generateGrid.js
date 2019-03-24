//initialize Firebase

var config = {
    apiKey: "AIzaSyDachk_9QujOsIUtMu__GyBCyN6CmqUt10",
    authDomain: "creative-project-142a8.firebaseapp.com",
    databaseURL: "https://creative-project-142a8.firebaseio.com",
    projectId: "creative-project-142a8",
    storageBucket: "creative-project-142a8.appspot.com",
    messagingSenderId: "198107992369"
  };
  firebase.initializeApp(config);
  
  var db = firebase.firestore();
  
  var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');
  
  
  //$(document).ready(() => {
  
    //an array of categories
    const categories = ['activities', 'animals', 'cats', 'food', 'places', 'random'];
    //6 images in a grid
    const imagesInGrid = 6;
    //random the categories using the function below and picking 1 out of 6 by generating random number between 0-5
    const chosenCategory = categories[randomNumber(categories.length)];
    //randoms the image in the same respect
    const chosenImage = randomNumber(imagesInGrid);
  
    console.log(chosenCategory, chosenImage);
  
    //loop through all the 6 images in the grid and draw them, connect to html using the id=grid
    // for (let i = 0; i < imagesInGrid; i++) {
    //   $('section#grid').append(`
    //     <div class="media">

    //       <button><img src="images/${chosenCategory}/${i}.jpg"></button>

        
    //     </div>
    //   `)
    // }

    
      

      
    // <a href="/Users/todsupornpaibul/Desktop/3rdYear/Creative Project/GameScreens/loading.html">

  
    // //randoms 1 image from 6 catagories, later I need to see which categories I have randomised and only random img from that specific categories
  
    // $('section#singleImg').append(`
    //   <div class="media">
    //     <img src="images/${chosenCategory}/${chosenImage}.jpg">
    //   </div>
    // `)
    //function to random number between 0-5
    function randomNumber(max) {
      return Math.floor(Math.random() * max)
    }

    

    //const emojiList = document.querySelector('#emoji-list');

    // function renderEmoji(doc){
    //     let li = document.createElement('li');
    //     let emoji = document.createElement('span');

    //     li.setAttribute('data-id', doc.id);
    //     emoji.textContent = doc.data().emoji

    //     li.appendChild(emoji);

    //     emojiList.appendChild(li);


    // }
    var product;

    var randomNumber = Math.floor((Math.random() * 6) + 1);

    //var thisGame = db.collection('new_game').doc(game_id_link);

    var newGame = db.collection('new_game');
    var game_id_link = location.search.split('?')[1];
    var currentPlayer = location.search.split('?')[2];
    var emojiRef = db.collection('img_described').doc('lvl_0').collection('emoji_lvl0');
    var thisGame = db.collection('new_game').doc(game_id_link);
    var rounds = "round1";

   
    // })

    



    // var query = emojiRef.where('grid', '==', chosenCategory).limit(1).get().then((snapshot) => {
    //     snapshot.docs.forEach(doc => {
    //         var x = doc.data();
    //         console.log(x)
    //         var y = x.target_img;
    //         console.log(y);
         
    //         //renderEmoji(doc);

    var test = thisGame.collection(rounds).doc(rounds).get().then((doc) => {
     
      var t = doc.data();
      console.log(t);
      var grid = doc.data().grid;
      var y = doc.data().target_img;
      var emoji = doc.data().emoji;
      console.log(grid, y, emoji);

      var categ = grid;
      //renderEmoji(emoji);
    
      $("#emoji-list").append(`<li>${emoji}</li>`);




    $('section#grid').append(`
    <div>

      <button><img src="images/${categ}/0.jpg" id="img0" value="0"></button>
      <button><img src="images/${categ}/1.jpg" id="img1" value="1"></button>
      <button><img src="images/${categ}/2.jpg" id="img2" value="2"></button>
      <button><img src="images/${categ}/3.jpg" id="img3" value="3"></button>
      <button><img src="images/${categ}/4.jpg" id="img4" value="4"></button>
      <button><img src="images/${categ}/5.jpg" id="img5" value="5"></button>

    
    </div>
  `)

            $(function(){
              $("#img0").click(function(){
        
                product = document.getElementById('img0').getAttribute('value');
                  //alert("click");
                  console.log(product);

                  if(y == product){
                    console.log("correct");
                    thisGame.collection(rounds).doc(rounds).update({
                      result: "correct",
                      game_state: "finished_correct"
                    })
                    setTimeout(function(){ 

        
                      window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
                    
                      
                    
                    }, 1000);
       
                  }else{
                    console.log("incorrect");
                    thisGame.collection(rounds).doc(rounds).update({
                      result: "incorrect",
                      game_state: "finished_wrong"
                    })
                    setTimeout(function(){ 

        
                      window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
                    
                      
                    
                    }, 1000);
                  
                  }
              }); 
          });

          $(function(){
            $("#img1").click(function(){
      
              product = document.getElementById('img1').getAttribute('value');
                //alert("click");
                console.log(product);

                if(y == product){
                  console.log("correct");
                  thisGame.collection(rounds).doc(rounds).update({
                    result: "correct",
                    game_state: "finished_correct"
                  })
                  setTimeout(function(){ 

        
                    window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
                  
                    
                  
                  }, 1000);
                
                }else{
                  console.log("incorrect");
                  thisGame.collection(rounds).doc(rounds).update({
                    result: "incorrect",
                    game_state: "finished_wrong"
                  })
                  setTimeout(function(){ 

        
                    window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
                  
                    
                  
                  }, 1000);
                  
                }
            }); 
        });

        $(function(){
          $("#img2").click(function(){
    
            product = document.getElementById('img2').getAttribute('value');
              //alert("click");
              console.log(product);

              if(y == product){
                console.log("correct");
                thisGame.collection(rounds).doc(rounds).update({
                  result: "correct",
                  game_state: "finished_correct"
                })
                setTimeout(function(){ 

        
                  window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
                
                  
                
                }, 1000);
                
              }else{
                console.log("incorrect");
                thisGame.collection(rounds).doc(rounds).update({
                  result: "incorrect",
                  game_state: "finished_wrong"
                  
                })
                setTimeout(function(){ 

        
                  window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
                
                  
                
                }, 1000);
                
              }
          }); 
      });

      $(function(){
        $("#img3").click(function(){
  
          product = document.getElementById('img3').getAttribute('value');
            //alert("click");
            console.log(product);

            if(y == product){
              console.log("correct");
              thisGame.collection(rounds).doc(rounds).update({
                result: "correct",
                game_state: "finished_correct"
              })
              setTimeout(function(){ 

        
                window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
              
                
              
              }, 1000);
              
            }else{
              console.log("incorrect");
              thisGame.collection(rounds).doc(rounds).update({
                result: "incorrect",
                game_state: "finished_wrong"
              })
              setTimeout(function(){ 

        
                window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
              
                
              
              }, 1000);
  
            }
        }); 
    });

    $(function(){
      $("#img4").click(function(){

        product = document.getElementById('img4').getAttribute('value');
          //alert("click");
          console.log(product);

          if(y == product){
            console.log("correct");
            thisGame.collection(rounds).doc(rounds).update({
              result: "correct",
              game_state: "finished_correct"
            })
            setTimeout(function(){ 

        
              window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
            
              
            
            }, 1000);
            
          }else{
            console.log("incorrect");
            thisGame.collection(rounds).doc(rounds).update({
              result: "incorrect",
              game_state: "finished_wrong"
            })
            setTimeout(function(){ 

        
              window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
            
              
            
            }, 1000);
            
          }
      }); 
  });

  $(function(){
    $("#img5").click(function(){

      product = document.getElementById('img5').getAttribute('value');
        //alert("click");
        console.log(product);

        if(y == product){
          console.log("correct");
          thisGame.collection(rounds).doc(rounds).update({
            result: "correct",
            game_state: "finished_correct"
          })
          setTimeout(function(){ 

        
            window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/correct.html" + "?" + game_id_link + "?" + currentPlayer ;
          
            
          
          }, 1000);
       
        }else{
          console.log("incorrect");
          thisGame.collection(rounds).doc(rounds).update({
            result: "incorrect",
            game_state: "finished_wrong"
          })
          setTimeout(function(){ 

        
            window.location.href = "http://igor.doc.gold.ac.uk/~tsupo001/game_v1/wrong.html" + "?" + game_id_link + "?" + currentPlayer ;
          
            
          
          }, 1000);
     
        }
    }); 
});

            
            
          })


 





    

  
  

  


  

 
  
  
  