# Knight-Tour-JS

### What is Knight's tour?

This is a mathematical puzzle for finding a sequence of moves where a knight placed on a chess board touches every cell exactly once, without backtracking. 
[Read more](https://en.wikipedia.org/wiki/Knight%27s_tour) More generally this is called a [Hamiltonian path problem](https://en.wikipedia.org/wiki/Hamiltonian_path_problem)

## Challenges:

Finding a path that satisfies the condition without an algorithm can take a very long time with a simple brute force approach. 

### How I solve it:

To solve the problem in a reasonable amount of time (linear) I use a heuristic called [Warnsdorff's rule](https://en.wikipedia.org/wiki/Heuristic) which states that the knight will always move to the next cell with the least amount of potential moves, this eliminates most of the cells that end up causing the knight to get cornered later on in the move. From there on I create a loop with causes the knight to keep replaying until a tour can be found for each of the cells on the board.  

### How this can be improved.

 - To improve overall performance a **Backtracking algorithm** can be added to ensure the board is always solved on the first tour
 - The moves can be placed in graphs to allow for better tours to be made with less computing.
 
 ### What does this demonstrate?

By solving this problem I demonstrate my understanding of:
- big O notation 
- loops 
- graphs/matrix 
- Heuristics
