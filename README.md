# Simulation-Project 
## Cache Memory Simulator 
This is a Simulation Project for CSARCH2 by Group 4 S11. The project is a Cache simulator (Full associative / LRU) made as a web application intended for users to simulate cache memory management. The application displays the total hits, misses, average access time, and number of memory accesses. 

## Features
- **Full Associative Mapping:** Allows any memory block to be loaded into any cache line.
- **LRU Replacement Algorithm:** Uses the Least Recently Used algorithm to manage cache replacements, ensuring that the least recently accessed memory block is replaced first.

## Technologies
- **Programming Language:** JavaScript
- **Deployment Platform:** Vercel through this link

## View Web App
link: https://csarch2spcachesimulatorfalru-kaitiepiees-projects.vercel.app/
  
## Running Locally
To run the project locally, follow these steps:
1. Clone this repository
2. Install dependencies: npm install
3. Run dev server: npm run dev
4. View locally: http://localhost:3000

## How to Use
1. **Input Block Size:** Enter the size of a block.
2. **Input Main Memory Size:** Specify the size of the main memory in blocks or words.
3. **Input Cache Memory Size:** Specify the size of the cache memory in blocks or words.
4. **Enter Sequence:** Input a sequence of numbers separated by commas (without spaces) to represent memory access patterns.
5. **Cache Access Time:** Provide the cache access time in nanoseconds (ns).
6. **Memory Access Time:** Provide the memory access time in nanoseconds (ns).
7. **Simulate:** Press the "Simulate" button to view the results.
8. **Download Results:** Press the "Download Results" button to generate the output in a TXT file.

## Output 
The simulator will provide the following outputs and solutions:
1. **Cache Hits and Misses:** Total number of cache hits and misses.
2. **Miss Penalty:** Time penalty incurred due to cache misses.
3. **Average Memory Access Time:** Average time taken to access memory.
4. **Total Memory Access Time:** Total time taken for all memory accesses.
5. **Cache Snapshot:** A snapshot of the cache's state at each step of the simulation, showing the contents of each cache line
   
## Authors
- Haneul Kim
- Luigi Maloles
- Kait Tighe
