
	//	Button logic 
	//	Contains the logic for the button click 
	class ButtonLogic {
	
		//	tileID = the id of the tile that has been clicked on 
		//	board = an instance of the virtual board 
		//	sideSwitcher = the instance of the side switcher class 
		AddTileToCell(tileID, board, sideSwitcher){
		
			let tile = board.FindTileById(tileID);
			let nextOneUpCoords = tile.GetNextOneUpCoords();
			let nextOneUpTile = board.FindTileByCoordinates(nextOneUpCoords.col, nextOneUpCoords.row);
			let victoryCheck = new VictoryCheck();
			
			let allCol = board.GetAllTilesInColumn(tile.col);
			let allRow = board.GetAllTilesInRow(tile.row);
			
			let allLeftDiags = board.GetLeftDiagonals(tile.col, tile.row);
			
			console.log(allLeftDiags);
			
			let allRightDiags;
			
			for(let a = allCol.length-1; a > -1; a--){
				
				if(allCol[a].occupationCode == 0){
					
					if(sideSwitcher.currentTurn == 1){
					
						document.getElementById(allCol[a].tileID).childNodes[0].classList = "";
						document.getElementById(allCol[a].tileID).childNodes[0].classList.add("redCounter");
						document.getElementById(allCol[a].tileID).setAttribute("data-occupationcode", sideSwitcher.currentTurn);
						
						allCol[a].ChangeOccupationCode(sideSwitcher.currentTurn);
						
					}
					
					if(sideSwitcher.currentTurn == 2){
						
						document.getElementById(allCol[a].tileID).childNodes[0].classList = "";
						document.getElementById(allCol[a].tileID).childNodes[0].classList.add("blueCounter");
						document.getElementById(allCol[a].tileID).setAttribute("data-occupationcode", sideSwitcher.currentTurn);
					
						allCol[a].ChangeOccupationCode(sideSwitcher.currentTurn);
						
					}
					
					board.UpdateTile(allCol[a]);
	
					
					break;
					
				} 	
				
			}
		
			//	Check for vertical win 
			victoryCheck.CheckVictory(allRow, sideSwitcher.currentTurn);
			
			//	Check for a horizontal win 
			victoryCheck.CheckVictory(allCol, sideSwitcher.currentTurn);
			

			sideSwitcher.ChangeTurn();
	
		
		}
		
	}