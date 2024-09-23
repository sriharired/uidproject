import React, {useEffect,useRef} from 'react';
import './Section1.css';

const Introcuction = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (videoElement.paused) {
        videoElement.play().catch((error) => {
          console.error('Auto-play was prevented. Click the video to play manually.');
        });
      }
    }
  }, []);


  return (
    <div className="video-section">
      <video ref={videoRef} className="video-bg" autoPlay loop muted playsInline >
        <source src={`${process.env.PUBLIC_URL}/Section-0.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="text-overlay">
        <h1 className='animated-text'>User Interface Design Project</h1>
        <p>Exploring Mythological Characters of Indian History</p>
      </div>
    </div>
  );
};

export default Introcuction;
