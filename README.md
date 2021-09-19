# nodejs-ts-distance-calculator

## Problem

Given a binary matrix of N x M, containing at least a value 1. The task is to find the distance of nearest 1 in the matrix for each cell. The distance is calculated as |i1 – i2| + |j1 – j2|, where i1, j1 are the row number and column number of the current cell and i2, j2 are the row number and column number of the nearest cell having value 1.


## Solution

You could solve it by brute force or BFS (Breadth-first search). I opted in for BFS considering the time complexity. 
Keep in mind that while calculating distance pointer moves either horizontally or vertically and not diagonally. And it's guaranteed that the matrix contains at least one 1.

### Considerations:
- You can input more than one test case (as you can see in the example below). 
- I could have spent some more time and write a production ready code and take into consideration things like type-safety, better exception handling etc. but I chose to have a working solution instead due to time limitation.
- Solution in `calculateDistance.ts` file is not mine. But I've spent time dissecting as much as possible, explaining each step with a comment. 
- Time Complexity of BFS (the approach i chose): O(N*M). 
In BFS traversal every element is traversed only once so time Complexity is O(M*N).
- Time Complexity of Brute Force approach would have been: O(N2*M2). 
For every element in the matrix, the matrix is traversed and there are N*M elements So the time complexity is O(N2*M2).
- I had fun working on this.

## How to install and build

```
yarn install
yarn run build
```

## How to run

```
yarn run start
```

Sample run with two sets of inputs (test case 1 and test case 2)

```
╰─ yarn run start
yarn run v1.22.11
$ ts-node src/index.ts

? number of test cases 2

? how many rows and columns (space sperated) 3 4

? Insert Zero indicating Black and One indicating White for test case 1 in row 1: 0001
? Insert Zero indicating Black and One indicating White for test case 1 in row 2: 0011
? Insert Zero indicating Black and One indicating White for test case 1 in row 3: 0110

? Insert Zero indicating Black and One indicating White for test case 2 in row 1: 1110
? Insert Zero indicating Black and One indicating White for test case 2 in row 2: 1100
? Insert Zero indicating Black and One indicating White for test case 2 in row 3: 1001

Result for testCase 0:
[ [ 3, 2, 1, 0 ], [ 2, 1, 0, 0 ], [ 1, 0, 0, 1 ] ]
Result for testCase 1:
[ [ 0, 0, 0, 1 ], [ 0, 0, 1, 1 ], [ 0, 1, 1, 0 ] ]
✨ Done in 22.16s.
```
