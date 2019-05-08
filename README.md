# Tic Tac Toe Game (1st project)

# Technologies used in the project 
- functions 
- arrays 
- Audio 
- jQuery with some events 
- I make the game responsive with mobile ver. 

# wireframes and user stories.
- As a user, I need a play again button to play a new game. 
- As a user, I need to kkeep track the score for each player. 
- As a user, I need to know who's turn in the game.
- As a user, I need select between X or O to get started. 
- As a user, I need to see a message who is the winner. 
- As a user, I need hear some of sound effect to react with the game. 
- As a user, I shouldn't be able to click to any button when game is starting except play again. 
- As a user, I shouldn't be able to click to any index of the board if I didn't select any mark to start (X or O). 
# Document your planning and tell a story about your development process and problem-solving strategy.
- In the beganing, I start sketching the structure of the game to know how the game will be, then for the back-end, I divide each section to start work with.
- I start by how can player select which mark he have to play with and I make it as a button. 
- For the actual game, how can I select each index in the board and add X or O without adding any algorithms and calculations. 
- After the clciking inside board index I start think how can I take the selecting mark from the player and use it in the startGame(). Also, how can I print who's turn is. 
- After testing the previous points I start thinking how can I save the id of target index of the board and save it inside the player array. 
- beacuse my index id's in the board isn't number it's string with number here, I have to remove the string part and keep the number so, I create a function that used regex to remove the string and keep the number and call the regex function when start pushing the index to the player array. 
- then I think how to stop clicking in the index if it wasn't empty ? so, make a condiotn if the length of each index equal zero then it's epty you can add yuor mark, if not I call off() to prevent clicking in that area. 
- After that I start thinking how to check whos the winner so, I create a combo winning chance array I'll used to to compare it with playes array if there is a match with one of players array so, there is a winner if there are no match so it's draw.
- I keep think how can I save the player score so I make a counter to check who's the winer player and display it side the board. 
- Finally, I make a restart button to make the user reset the game without refreshing the page. 

# unsolved problems which would be fixed in future iterations.
- check if it's a draw: I think I have to re-think about this part and change it to be more flixable with my code. 
- add option if the user want to play with (X or O) or with images or their names. 
- add a timer 
# Describe how you solved for the winner
- I make an array for each player to save thier moves.
- Then, I used find() to search inside each player array to find if there is a match with combo box wining chance. 
- also, used every() to loop through each index and find if there is match or not.
- Then, I saved the return value in a varible and check if the is varible equal 'undefined' or not.
- if not equal then print the winer name and increment the score of that player to +1 .
- if yes the it's Draw. 
# Describe how some of your favorite functions work
startGame() is the core of the game in the beganinng: 
- it check if there is an empty index in the board or not by checking the length of each div inside the board it is equal to 0 it means it's empty you can assign your mark, if it is not equal prevent clicking to add any mark inside that div. 
- after that, it will count the user click if the click was even it means it's player 1 turn, else it's player 2 turn.
- with every turn add a mark of the current player (X or O). 
- for each assigned mark change the background color of that div and play the sound effect. also, add the target index to the player array. 
