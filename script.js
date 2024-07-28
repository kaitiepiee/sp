document.getElementById('simulate-button').addEventListener('click', simulateCache);

function simulateCache() {
    // Fetch input values
    // const blockSize = parseInt(document.getElementById('block-size').value);
    // const mainMemoryBlocks = document.getElementById('main-memory-blocks').value;
    // const mainMemoryWords = document.getElementById('main-memory-words').value;
    // const cacheMemoryBlocks = document.getElementById('cache-memory-blocks').value;
    // const cacheMemoryWords = document.getElementById('cache-memory-words').value;
    // const programFlow = document.getElementById('program-flow').value.split(',').map(Number);
    // const missPenalty = parseInt(document.getElementById('miss-penalty').value);

    const blockSize = parseInt(document.getElementById('block-size').value);
    const mainMemoryInput = document.getElementById('main-memory').value;
    const mainMemoryType = document.querySelector('#main-memory + select').value;
    const cacheMemoryInput = document.getElementById('cache-memory').value;
    const cacheMemoryType = document.querySelector('#cache-memory + select').value;
    const programFlowInput = document.getElementById('program-flow').value;
    const missPenalty = parseInt(document.getElementById('miss-penalty').value);

    // Convert program flow input to array of numbers
    const programFlow = programFlowInput.split(',').map(Number);

    // Determine main memory size
    //const mainMemorySize = mainMemoryBlocks ? parseInt(mainMemoryBlocks) : parseInt(mainMemoryWords) / blockSize;
    const mainMemorySize = mainMemoryType === 'blocks'
    ? parseInt(mainMemoryInput)
    : parseInt(mainMemoryInput) / blockSize;

    // Determine cache memory size
    //const cacheMemorySize = cacheMemoryBlocks ? parseInt(cacheMemoryBlocks) : parseInt(cacheMemoryWords) / blockSize;
    const cacheMemorySize = cacheMemoryType === 'blocks'
        ? parseInt(cacheMemoryInput)
        : parseInt(cacheMemoryInput) / blockSize;

    // Initialize cache and memory
    let cache = [];
    let mainMemory = new Array(mainMemorySize).fill(null).map((_, index) => index); // Dummy main memory

    let hits = 0;
    let misses = 0;
    let time = 0;

    programFlow.forEach(address => {
        let block = Math.floor(address / blockSize);
        let index = cache.findIndex(entry => entry.block === block);

        if (index !== -1) {
            // Cache hit
            hits++;
            cache[index].time = time;
        } else {
            // Cache miss
            misses++;
            if (cache.length < cacheMemorySize) {
                cache.push({ block, time });
            } else {
                // LRU replacement
                cache.sort((a, b) => a.time - b.time);
                cache[0] = { block, time };
            }
            time += missPenalty;
        }
        time++;
    });

    let averageAccessTime = time / programFlow.length;
    let totalAccessTime = time;

    // Output results
    document.getElementById('hits').innerText = `Cache Hits: ${hits}`;
    document.getElementById('misses').innerText = `Cache Misses: ${misses}`;
    document.getElementById('miss-penalty-output').innerText = `Miss Penalty: ${missPenalty}`;
    document.getElementById('average-access-time').innerText = `Average Memory Access Time: ${averageAccessTime}`;
    document.getElementById('total-access-time').innerText = `Total Memory Access Time: ${totalAccessTime}`;

    // Display cache snapshot
    let cacheSnapshot = cache.map(entry => `Block: ${entry.block}, Time: ${entry.time}`).join('\n');
    document.getElementById('cache-snapshot').innerText = cacheSnapshot;
}

document.getElementById('download-results').addEventListener('click', downloadResults);

function downloadResults() {
    let resultText = `
        Cache Hits: ${document.getElementById('hits').innerText}
        Cache Misses: ${document.getElementById('misses').innerText}
        Miss Penalty: ${document.getElementById('miss-penalty-output').innerText}
        Average Memory Access Time: ${document.getElementById('average-access-time').innerText}
        Total Memory Access Time: ${document.getElementById('total-access-time').innerText}
        Cache Snapshot: ${document.getElementById('cache-snapshot').innerText}
    `;
    let blob = new Blob([resultText], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'cache_simulation_results.txt';
    link.click();
}
