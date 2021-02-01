
	//	VictoryCheck
	//	Rules for a victory.
	class VictoryCheck {
		
		//	Checks if there is a victory for a side
		//	tilesList = the array of tiles 
		//	side = the side to check for a victory
		CheckVictory(tilesList, side){
			
			let counterLimit = 4;
			let counter = 0;
			
			//	Wincode 
			//	0 = no wins 
			//	1 = player 1 wins 
			//	2 = player 2 wins 
			let winCode = 0;
			
			for(let a = tilesList.length-1; a > -1 ; a--){
			
				if(tilesList[a].occupationCode == side){
					
					console.log(tilesList[a].tileID + " is on same side");
					
					counter++;
					
					if(counter == counterLimit){
						
						winCode = side;
						break;
						
					}
					
				} else {
					
					counter = 0;
					
				}
			
			}
			
			
			switch(winCode){
						
				default:
					//	No win
					console.log("no win");
				break;
						
				case 1:
					window.alert("player 1 wins!");
				break;
						
				case 2:
					window.alert("player 2 wins!");
				break;
			}
			
			
		}
		
		
	}