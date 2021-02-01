
	//	Class SideSwicher
	//	Changes the sides 
	class SideSwitcher {
		
		constructor(){
			
			this.currentTurn = 0;
			this.player1 = 1;
			this.player2 = 2;
			
		}
		
		//	RNG for the first turn 
		FirstTurn(){
			
			let rng = Math.floor(Math.random() * 100);
			
			if(rng > 50){
				this.currentTurn = this.player1;
			} else {
				this.currentTurn = this.player2;
			}
			
		}
		
		//	Changes the turn 
		ChangeTurn(){
			
			if(this.currentTurn == this.player1){
				
				this.currentTurn = this.player2;
				
			} else {
				
				this.currentTurn = this.player1;
				
			}
			
		}
		
	}