# Knight-Tour-JS

I started working on the knight tour algorithm two months into writing my first code, needless to say for months I failed miserably, over and over and over again.

This project has taught me so much about programming, it pushed me to my absolute limit and forced me to grow up, taught me to think better and now I feel like I am a more patient
person in general. 

When I started I had no idea how to use recursive algorithms, I'd always mess up my base case which would cause my program to crash due to infinite recursions. 
Another problem I ran into was space and time complexity, when I started I thought I could just crack the problem by putting my traversal algorithm in a loop with no time or space 
optimisation. Well I would get 3-4 numbers away from a solution but 99% of my the attempts would end with the knight cornering itself by the 40th move. 

So I kept quitting and coming back a couple weeks later only to leave defeated.

Today I decided to try my luck at it again so I started off by defining a board, two arrays to hold the knight's x and y moves, a move_count variable set to 0 and an attempt
number variable.
 
 From there I decided to work with the Warnsdorff algorithm, so I made a function (find_cells_Warnsdorff_values) which goes over every cell in the board and asigns a value
 which corrosponds with the number of cells accessible from our current cell. 
 This will help the AI to choose which cell it should take next in order to reach a valid solution.
 
 Then I made a solve_tour function which recursively searches for the next best cell and makes the move when said cell is found, I randomly choose from the available moves
 if there's a tie between which move should be taken next, this probably isn't ideal because technically it /could/ cause my alogrithm to have a worst case of (infinity) and 
 while that is extremely unlikely it is something to take into account (Warsndorffs algorithm kind of combats the issue but not completely).
 
 my base case resets the board if no solution would be found, it then increments or attempt counter by 1
 if a solution is found it will be printed to the console along with how many attempts it took to reach the solution.
 
Finally I put my solve_tour function in a knight_tour function which takes a starting point and loops until a solution is found.

One last thing that I learned because of this project is that logging a lot of things onto the console only serve to cause the program to crash, so I made it that I would only log 
a solution, just to decrease the likelyhood of the program crashing.

Cheers guys!
