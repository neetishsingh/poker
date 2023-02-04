console.log("Chalu ho gya bro")
var playerlist=new Array()
var roundlist=new Array()
var maxvalue=0
var randomimagelist=['https://www.freeiconspng.com/thumbs/pokemon-png/render-pokemon-png-1.png','https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png','https://www.pngitem.com/pimgs/m/2-24996_pokemon-png-transparent-png.png','https://www.transparentpng.com/thumb/pokemon/G0pQk0-pokemon-png-icon.png','https://www.pngmart.com/files/22/Eevee-Pokemon-Transparent-PNG.png','https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527786833pqvld.png']
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
function Players(date, contact,currentScore) {
    this.name = date
    this.initialAmount = contact
    this.currentScore=currentScore
    this.imageurl=randomimagelist[getRndInteger(0, 4) ]
}
function RoundList(number,score,left){
   this.number=number
   this.score=score
this.left=left
}
function cardround(player,currenround,isout){
    var randsid=Math.random()
    if(isout==1){
      return '<div class="card '+player.name+'" style="padding:20px;width:200px;background-color:grey"><img class="card-img-top" src="'+player.imageurl+'" alt="Card image"><div class="card-body"><h4 class="card-title">'+player.name+'</h4><p class="card-text">Score: '+player.currentScore+'</p><a href="#" class="btn btn-primary">Left Out</a></div></div>'  
    }
    if(player.currentScore-currenround<=0){
        return '<div class="card '+player.name+'" style="padding:20px;width:200px;background-color:grey"><img class="card-img-top" src="'+player.imageurl+'" alt="Card image"><div class="card-body"><h4 class="card-title">'+player.name+'</h4><p class="card-text">Score: '+player.currentScore+'</p><a href="#" class="btn btn-primary">Low Balance Round Bet:'+currenround+'</a></div></div>'  
        
    }
    return '<div class="card '+player.name+'" style="padding:20px;width:200px;"><img class="card-img-top" src="'+player.imageurl+'" alt="Card image"><div class="card-body"><h4 class="card-title">'+player.name+'</h4><p class="card-text">Score: '+player.currentScore+'</p><input type="Text" class="form-control '+randsid+'" id="currentc" placeholder="Enter CustomValue" name="email" value="'+currenround+'"><a href="#" class="btn btn-primary '+randsid+'" onclick="updatebet('+randsid+')">Lock Bet</a></div></div>'  
        

}
function updatebet(id){

    //document.getElementsByClassName(id).value
    document.getElementById('currentc').value=document.getElementsByClassName(id.toString()).value
}

function gethtmlRound(){
    document.getElementById('roundcard').innerHTML=''
    
    if(roundlist.length==0){
       for(var io=0;io<playerlist.length;io++){
        document.getElementById('roundcard').innerHTML=
        document.getElementById('roundcard').innerHTML+cardround(playerlist[io],0,0)
       }     
        
    }
    else{
        
       for(var io=0;io<playerlist.length;io++){
      document.getElementById('roundcard').innerHTML=
      document.getElementById('roundcard').innerHTML+cardround(playerlist[io],0,roundlist[roundlist.length-1].left)
       }

    }

}

function addplayer(){

    console.log(document.getElementById('name1').value);

    console.log("daal gya")
    appendinlist(document.getElementById('name1').value,document.getElementById('amount1').value)
}

function appendinlist(name,amount){
    document.getElementById('tablebase').innerHTML=
    document.getElementById('tablebase').innerHTML+'<tbody><tr><td>'+name+'</td><td>'+amount+'</td></tr></tbody>'
   playerlist.push(new Players(name,amount,amount))
   console.log(playerlist)
   gethtmlRound()
}

function createCurrentLeaderboard(){
    document.getElementById('roundcard').innerHTML=''
    
      
}


//var data = []


//clients = new Array();
/*
for (i = 0; i < 4; i++) {
    clients.push(new Client("2018-08-0" + i, i))
}

for (i = 0; i < clients.length; i++) {
    var dict = {}
    dict['Date'] = clients[i].date
    dict['Contact'] = clients[i].contact
    data[i] = dict
}*/

//console.log(data)