import React, { useState, useEffect } from 'react';

function StatusTracker() {
  const [progress, setProgress] = useState(75);

  useEffect(() => {
    // Simulating live update of progress status
    const interval = setInterval(() => {
      setProgress((prevProgress) => (prevProgress < 100 ? prevProgress + 1 : 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="status-tracker">
      <h2>Live Status Tracker</h2>
      <p>Current Service: Lawn Mowing</p>
      <p>Status: On site</p>
      <p>Time Remaining: {100 - progress} mins</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>{progress}% Complete</div>
      </div>
    </div>
  );
}

export default StatusTracker;