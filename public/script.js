if (typeof window !== 'undefined') {
    document.getElementById('simulate-button').addEventListener('click', simulateCache);
  
    function simulateCache() {
        const blockSize = parseInt(document.getElementById('block-size').value);
        const mainMemoryInput = document.getElementById('main-memory').value;
        const mainMemoryType = document.querySelector('#main-memory-type').value;
        const cacheMemoryInput = document.getElementById('cache-memory').value;
        const cacheMemoryType = document.querySelector('#cache-memory-type').value;
        const programFlowInput = document.getElementById('program-flow').value;
        const cacheAccessTime = parseInt(document.getElementById('cache-access-time').value);
        const memoryAccessTime = parseInt(document.getElementById('memory-access-time').value);
    
        // Convert program flow input to array of numbers
        const programFlow = programFlowInput.split(',').map(Number);
    
        // Determine main memory size
        const mainMemorySize = mainMemoryType === 'blocks'
            ? parseInt(mainMemoryInput)
            : Math.ceil(parseInt(mainMemoryInput) / blockSize);
    
        const cacheMemorySize = cacheMemoryType === 'blocks'
            ? parseInt(cacheMemoryInput)
            : Math.ceil(parseInt(cacheMemoryInput) / blockSize);
    
        let hits = 0;
        let misses = 0;
        let time = 0;
    
        // Cache structure
        const cacheBlocks = cacheMemorySize;
        const cacheData = new Array(cacheBlocks).fill(null);
        const cacheTime = new Array(cacheBlocks).fill(0);
    
        programFlow.forEach(address => {
            let block = Math.floor(address / blockSize);
            let index = cacheData.indexOf(block);
    
            if (index !== -1) {
                // Cache hit
                misses++;
                cacheTime[index] = ++time;
            } else {
                // Cache miss
                hits++;
                if (cacheData.includes(null)) {
                    // Cache not full, just add new block
                    cacheData[cacheData.indexOf(null)] = block;
                    cacheTime[cacheData.indexOf(block)] = ++time;
                } else {
                    // Cache full, replace least recently used block
                    let lruIndex = cacheTime.indexOf(Math.min(...time));
                    cacheData[lruIndex] = block;
                    time[lruIndex] = ++time;
                }
            }
            time++;
        });
    
        // Calculations
        const totalAccesses = programFlow.length;
        const hitRate = hits / totalAccesses;
        const missRate = misses / totalAccesses;
        const missPenalty = cacheAccessTime + memoryAccessTime + memoryAccessTime + cacheAccessTime;
        const averageAccessTime = (hitRate * cacheAccessTime) + (missRate * missPenalty);
        const totalAccessTime = (hits * blockSize *cacheAccessTime) +  (misses * blockSize * (memoryAccessTime+1)) + (misses * cacheAccessTime);
    
        // Display results
        document.getElementById('hits').innerText = `Cache Hits: ${hits}`;
        document.getElementById('misses').innerText = `Cache Misses: ${misses}`;
        document.getElementById('miss-penalty-output').innerText = `Miss Penalty = ${cacheAccessTime}ns + ${memoryAccessTime}ns + ${memoryAccessTime}ns + ${cacheAccessTime}ns = ${missPenalty}ns`;
        document.getElementById('average-access-time').innerText = `Average Memory Access Time = (${hitRate.toFixed(2)} * ${cacheAccessTime}ns) + (${missRate.toFixed(2)} * ${missPenalty}ns) = ${averageAccessTime.toFixed(2)}ns`;
        document.getElementById('total-access-time').innerText = `Total access time = (${hits} * ${blockSize} *  ${cacheAccessTime}ns) + (${misses} * ${blockSize} * ${memoryAccessTime}ns +1ns) + (${misses} * ${cacheAccessTime}ns) = ${totalAccessTime.toFixed(2)}ns`;
    
        // Display cache snapshot
        let cacheSnapshot = cacheData.map((block, index) => 
            `Block: ${block === null ? 'Empty' : block}, Time: ${cacheTime[index]}`
        ).join('\n');
        document.getElementById('cache-snapshot').innerText = cacheSnapshot;
    }
  
    document.getElementById('download-results').addEventListener('click', downloadResults);
  
    function downloadResults() {
      let resultText = document.getElementById('output').innerText;
      let blob = new Blob([resultText], { type: 'text/plain' });
      let link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'cache_simulation_results.txt';
      link.click();
    }
  }
  