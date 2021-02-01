
	//	A representation of the board.
	class Board {
		
		//	constructor
		//	tableID = the ID of the html table that the game will be in 
		constructor(tableID){
			
			this.tableID = tableID;
			
			this.cols = 7;
			this.rows = 5;
			
			//	The total tile instances.
			this.tiles = [];

			//	Setup initial HTML board.
			this.SetupInitialHTMLBoard(this.tableID, this.rows, this.cols, new SideSwitcher());
			
			
		}
		
		//	Find tile by coordinates
		FindTileByCoordinates(col, row){
			
			let tile = null;
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].col == col && this.tiles[a].row == row){
			
					tile = this.tiles[a];
					break;
					
				}
				
			}
			
			return tile;
			
		}
		
		//	Finds a tile by the id 
		//	tileID = the id of the tile to look for 
		FindTileById(tileID){
			
			let tile = null;
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].tileID == tileID){
					
					tile = this.tiles[a];
					
					break;
					
				}
				
			}
			
			return tile;
			
		}
		
		//	Gets a row of tiles 
		//	row = the row number to look for 
		GetAllTilesInRow(row){
			
			let rowsOfTiles = [];
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].row == row){
					
					rowsOfTiles.push(this.tiles[a]);
					
				}
				
			}
			
			return rowsOfTiles;
			
		}
		
		//	Gets a column of tiles 
		//	col = the column number to look for 
		GetAllTilesInColumn(col){
			
			let colsOfTiles = [];
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].col == col){
					
					colsOfTiles.push(this.tiles[a]);
					
				}
				
			}
			
			return colsOfTiles;
			
		}
		
		//	Gets the left diagonals.
		//	col = the column the tile is on 
		//	row = the row that the tile is on 
		GetLeftDiagonals(col, row){
			
			let leftDiagonals = [];
			
			let cols = this.GetAllTilesInColumn(col);
			let rows = this.GetAllTilesInRow(row);
			
			
			
			return leftDiagonals;
			
		}
		
		//	Update tile 
		//	tileInstance = an instance of the tile 
		UpdateTile(tile){
			
			for(let a = 0; a < this.tiles.length; a++){
				
				if(this.tiles[a].tileID == tile.tileID){
					
					this.tiles[a] = tile;
					break;
					
				}
				
			}
			
			
		}
		
		//	Sets up an initial HTML board
		//	tableID = the ID of the html table that the game will be in 
		//	maxRows = the maximum number of rows 
		//	maxRows = the maximum number of columns 
		SetupInitialHTMLBoard(tableID, maxRows, maxColumns, sideSwitcher){
			
			//	Counter to count total number of cells.
			let cntr = 0;
			
			//	Start making the rows...
			for(let a = 0; a < maxRows; a++){

				//	Make a HTML row 
				let tr = document.createElement("tr");
				
				//	Start making a cell 
				for(let b = 0; b < maxColumns; b++){
					
					//	The HTML cell 
					let td = document.createElement("td");
					
					//	The HTML cell's name 
					let cellName = "tile_" + cntr;
					
					//	Assign cell name and class style 
					td.id = cellName;
					
					td.classList = "";
					td.classList.add("neutralTile");
					
					//	Assign data attributes 
					td.setAttribute("data-col", b);
					td.setAttribute("data-row", a);
					td.setAttribute("data-occupationcode", 0);
					
					//	occupationCode = determines if tile occupied by neutral, friend or foe 
					//	0 = neutral 
					//	1 = friend 
					//	2 = foe 
					let occupationCode = 0;
					
					//	cellName = the name of the cell 
					//	a = the row number 
					//	b = the column number 
					//	occupationCode = the occupation code for the tile
					let t1 = new Tile(cellName, a, b, occupationCode);
					
					//	Create a span and a paragraph tag 
					let span = document.createElement("span");
					let p = document.createElement("p");
					
					//	Self context of board for click event 
					let cntxt = this;
			
					sideSwitcher.FirstTurn();
					
					//	Click event added in closure to gain access to properties 
					//	outside.
					(function(){
					
						td.addEventListener("click", function(){
							
							let buttonLogic = new ButtonLogic();
							buttonLogic.AddTileToCell(t1.tileID, cntxt, sideSwitcher);
							
						});
					
					})();
					
					//	Add the counter to be the HTML content of paragraph 
					p.innerHTML = cntr;
					
					cntr++;
					
					t1.htmlElementInstance = td;
					
					//	Add tile to tiles 
					this.tiles.push(t1);
					
					//	Append elements 
					span.appendChild(p);
					td.appendChild(span);
					tr.appendChild(td);
					
				}
				
				//	Append row to table 
				document.getElementById(tableID).appendChild(tr);
				
			}
			
			this.totalNumberOfCells = cntr;
			
			
		}
		
		
	}