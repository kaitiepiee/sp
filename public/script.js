if (typeof window !== 'undefined') {
    document.getElementById('simulate-button').addEventListener('click', simulateCache);

    function simulateCache() {
        // Get input values
        const blockSize = parseInt(document.getElementById('block-size').value);
        const mainMemoryInput = document.getElementById('main-memory').value;
        const mainMemoryType = document.querySelector('#main-memory-type').value;
        const cacheMemoryInput = document.getElementById('cache-memory').value;
        const cacheMemoryType = document.querySelector('#cache-memory-type').value;
        const programFlowInput = document.getElementById('program-flow').value;
        const cacheAccessTime = parseInt(document.getElementById('cache-access-time').value);
        const memoryAccessTime = parseInt(document.getElementById('memory-access-time').value);
    
        // Error checking
        if (isNaN(blockSize) || blockSize <= 0) {
            alert("Please enter a valid block size greater than 0.");
            return;
        }
        if (!mainMemoryInput || isNaN(parseInt(mainMemoryInput)) || parseInt(mainMemoryInput) <= 0) {
            alert("Please enter a valid main memory size greater than 0.");
            return;
        }
        if (!cacheMemoryInput || isNaN(parseInt(cacheMemoryInput)) || parseInt(cacheMemoryInput) <= 0) {
            alert("Please enter a valid cache memory size greater than 0.");
            return;
        }
        if (!programFlowInput || programFlowInput.split(',').some(addr => isNaN(parseInt(addr)))) {
            alert("Please enter a valid program flow with comma-separated addresses.");
            return;
        }
        if (isNaN(cacheAccessTime) || cacheAccessTime < 0) {
            alert("Please enter a valid cache access time greater than or equal to 0.");
            return;
        }
        if (isNaN(memoryAccessTime) || memoryAccessTime < 0) {
            alert("Please enter a valid memory access time greater than or equal to 0.");
            return;
        }
    
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
        const cacheData = new Array(cacheBlocks).fill(null); // Cache blocks
        const cacheTime = new Array(cacheBlocks).fill(0);    // LRU timestamps
        const cacheState = new Array(cacheBlocks).fill(null); // Cache state data
    
        // Prepare for table update
        let tableRows = [];
    
        programFlow.forEach((address) => {
            let block = address / blockSize;
            let cacheIndex = cacheData.indexOf(block);
            let hitStatus = '';
            let missStatus = '';
            let blockNumber = '';
    
            // Debugging 
            console.log('Address:', address);
            console.log('Block:', block);
            console.log('Cache Index:', cacheIndex);
            console.log('Cache Data:', cacheData);
            console.log('Cache Time:', cacheTime);
    
            if (cacheIndex === -1) {
                // Cache miss
                missStatus = address;
                misses++;
                lruIndex = cacheTime.indexOf(Math.min(...cacheTime));
                if (lruIndex > cacheMemorySize) // if cache is full
                {   
                    lruIndex = cacheTime.indexOf(Math.min(...cacheTime));
                    blockNumber = lruIndex 
                }
                else if (lruIndex < blockNumber) { // if cache is not full
                    lruIndex = cacheData.indexOf(null); 
                }
                // Replace or add the block in the cache
                cacheData[lruIndex] = block;
                blockNumber = lruIndex;
                cacheTime[lruIndex] = ++time;
                cacheState[lruIndex] = address; 
              } else {
                // Cache hit
                hitStatus = address;
                blockNumber = ''; // display empty cell
                hits++;
                cacheTime[cacheIndex] = ++time;
              }
    
            // Sequence
            tableRows.push(`
                <tr>
                    <td>${address}</td>
                    <td>${hitStatus !== '' ? hitStatus : ''}</td>
                    <td>${missStatus !== '' ? missStatus : ''}</td>
                    <td>${blockNumber !== '' ? blockNumber : ''}</td>
                </tr>
            `);
        });
    
        document.getElementById('cache-snapshot-body').innerHTML = tableRows.join('');

        // Calculations
        const totalAccesses = programFlow.length;
        const hitRate = hits / totalAccesses;
        const missRate = misses / totalAccesses;
        const missPenalty = cacheAccessTime + memoryAccessTime + memoryAccessTime + cacheAccessTime;
        const averageAccessTime = (hitRate * cacheAccessTime) + (missRate * missPenalty);
        const totalAccessTime = (hits * blockSize * cacheAccessTime) + (misses * blockSize * (memoryAccessTime + 1)) + (misses * cacheAccessTime);
    
        // Display results
        document.getElementById('hits').innerText = `Cache Hits: ${hits}/${totalAccesses}`;
        document.getElementById('misses').innerText = `Cache Misses: ${misses}/${totalAccesses}`;
        document.getElementById('miss-penalty-output').innerText = `Miss Penalty = ${cacheAccessTime}ns + ${memoryAccessTime}ns + ${memoryAccessTime}ns + ${cacheAccessTime}ns = ${missPenalty}ns`;
        document.getElementById('average-access-time').innerText = `Average Memory Access Time = (${hitRate.toFixed(2)} * ${cacheAccessTime}ns) + (${missRate.toFixed(2)} * ${missPenalty}ns) = ${averageAccessTime.toFixed(2)}ns`;
        document.getElementById('total-access-time').innerText = `Total access time = (${hits} * ${blockSize} * ${cacheAccessTime}ns) + (${misses} * ${blockSize} * ${memoryAccessTime}ns +1ns) + (${misses} * ${cacheAccessTime}ns) = ${totalAccessTime.toFixed(2)}ns`;

        // Update final cache state table
        let finalCacheRows = cacheState.map((data, index) => `
            <tr>
                <td>${index}</td>
                <td>${data !== null ? data : ''}</td>
            </tr>
        `);
        document.getElementById('final-cache-body').innerHTML = finalCacheRows.join('');
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