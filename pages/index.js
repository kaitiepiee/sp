import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/script.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Cache Simulator</title>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div id="app">
        <h1>Cache Simulator (FA/LRU)</h1>
        <h2>Initialization</h2>
        <div id="input-form">
          <div className="form-group left-align">
            <label htmlFor="block-size">Block Size:</label>
            <input type="text" id="block-size" name="block-size" />
          </div>

          <div className="form-group">
            <label htmlFor="main-memory">Main Memory Size:</label>
            <div className="input-group">
              <input type="text" id="main-memory" name="main-memory" />
              <select id="main-memory-type">
                <option value="blocks">blocks</option>
                <option value="words">words</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cache-memory">Cache Memory Size:</label>
            <div className="input-group">
              <input type="text" id="cache-memory" name="cache-memory" />
              <select id="cache-memory-type">
                <option value="blocks">blocks</option>
                <option value="words">words</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="program-flow">Program Flow (e.g., 0, 2, 4, 0, 2, 6):</label>
            <div className="input-group">
              <input type="text" id="program-flow" name="program-flow" />
              <select id="program-flow-type">
                <option value="blocks">blocks</option>
                <option value="words">words</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cache-access-time">Cache Access Time (ns):</label>
            <input type="text" id="cache-access-time" name="cache-access-time" />
          </div>

          <div className="form-group">
            <label htmlFor="memory-access-time">Memory Access Time (ns):</label>
            <input type="text" id="memory-access-time" name="memory-access-time" />
          </div>
          
          <button type="button" id="simulate-button" className="simulate-button">Simulate</button>
        </div>
        <div id="output">
          <h2>Results</h2>
          <p id="hits">Cache Hits: </p>
          <p id="misses">Cache Misses: </p>
          <p id="miss-penalty-output">Miss Penalty: </p>
          <p id="average-access-time">Average Memory Access Time: </p>
          <p id="total-access-time">Total Memory Access Time: </p>
          <h2>Cache Snapshot</h2>
          <pre id="cache-snapshot"></pre>
          <button type="button" id="download-results">Download Results</button>
        </div>
      </div>
    </>
  );
}
