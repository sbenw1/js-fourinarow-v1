
	//	Represents a tile 
	class Tile {
	
		//	tileID = the name of the tile 
		//	row = the row that the tile is on 
		//	col = the column number that the tile is on 
		//	occupationCode = determines if a tile is occupied
		//	0 = neutral 
		//	1 = friend 
		//	2 = foe 
		//	htmlElementInstance = the instance of the related html cell
		constructor(tileID, row, col, occupationCode, htmlElementInstance){
		
			this.tileID = tileID;
			this.row = row;
			this.col = col;
			this.occupationCode = occupationCode;
			this.htmlElementInstance = htmlElementInstance
		
		}
		
		//	Produces the coordinates of the tile above.
		GetNextOneUpCoords(){
			
			let nextRow = this.row - 1;
			
			return {
				"col" : this.col,
				"row" : nextRow
				
			};
			
		}
		
		//	Changes the occupation code if neutral 
		//	code = the occupation code to be changed
		ChangeOccupationCode(code){
			
			if(this.occupationCode == 0){
				
				this.occupationCode = code;
				
			}
			
		}
		
	}