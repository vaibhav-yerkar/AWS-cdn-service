import React from "react";

// Sample video data
const videoData = [
  {
    id: 1,
    title: "10_sec",
    url: `${import.meta.env.VITE_APP_CDN_VIDEO_LINK}/10_sec.mp4`,
  },
  {
    id: 2,
    title: "30_Sec",
    url: `${import.meta.env.VITE_APP_CDN_VIDEO_LINK}/30_Sec.mp4`,
  },
  {
    id: 3,
    title: "Family Trip",
    url: `${import.meta.env.VITE_APP_CDN_VIDEO_LINK}/Family_Trip.mp4`,
  },
  {
    id: 4,
    title: "Fight-Scene",
    url: `${import.meta.env.VITE_APP_CDN_VIDEO_LINK}/Fight-Scene.mp4`,
  },
  {
    id: 5,
    title: "Video 1",
    url: `${import.meta.env.VITE_APP_CDN_VIDEO_LINK}/18249-290359989_small.mp4`,
  },
  {
    id: 6,
    title: "Video 2",
    url: `${
      import.meta.env.VITE_APP_CDN_VIDEO_LINK
    }/27816-366185131_medium.mp4`,
  },
  {
    id: 7,
    title: "Video 3",
    url: `${
      import.meta.env.VITE_APP_CDN_VIDEO_LINK
    }/33698-398277503_medium.mp4`,
  },
];

// Sample image data
const ImageData = [
  {
    id: 1,
    title: "Camera",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/camera.jpeg`,
  },
  {
    id: 2,
    title: "Cat",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/cat.jpeg`,
  },
  {
    id: 3,
    title: "Eiffel Tower",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/eiffel.jpeg`,
  },
  {
    id: 4,
    title: "Eye",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/eye.jpeg`,
  },
  {
    id: 5,
    title: "Japanese Temple Gate",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/gate.jpeg`,
  },
  {
    id: 6,
    title: "Image",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/images.jpeg`,
  },
  {
    id: 7,
    title: "Nature",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/nature.jpeg`,
  },
  {
    id: 8,
    title: "Scenery",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/scenery.jpeg`,
  },
  {
    id: 9,
    title: "Chamelion",
    url: `${import.meta.env.VITE_APP_CDN_IMAGE_LINK}/Unknown.jpeg`,
  },
];

// VideoPlayer component
const VideoPlayer = ({ title, url }) => {
  return (
    <div className="video-container">
      {/* <img src={url} alt="alter" /> */}
      <video controls>
        <source src={url} type="video/mp4" />
      </video>
      <h3>{title}</h3>
    </div>
  );
};

// ImageDisplay component
const ImageDisplay = ({ title, url }) => {
  return (
    <div className="image-container">
      <img src={url} alt="alter" />
      <h3>{title}</h3>
    </div>
  );
};

// Sidebar component
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>Home</li>
        <li>Trending</li>
        <li>Subscriptions</li>
        <li>Library</li>
      </ul>
    </div>
  );
};

// Header component
const Header = () => {
  return (
    <div className="header">
      <h1>Content Delievry Services</h1>
      <input type="text" placeholder="Search..." />
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <div className="main-body">
          <h1 className="heading">Videos</h1>
          <div className="video-grid">
            {videoData.map((video) => (
              <VideoPlayer key={video.id} title={video.title} url={video.url} />
            ))}
          </div>
          <h1 className="heading">Images</h1>
          <div className="video-grid">
            {ImageData.map((image) => (
              <ImageDisplay
                key={image.id}
                title={image.title}
                url={image.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// CSS styles
const styles = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #000; /* Black background */
    color: #fff; /* White text */
    height: 100vh; /* Full height */
    overflow: hidden; /* Prevent scroll */
  }

  .app {
    display: flex;
    flex-direction: column;
    height: 100vh; /* Full height */
  }

  .header {
    background-color: #222; /* Darker header */
    padding: 15px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  }

  .header h1 {
    margin: 0;
    font-size: 28px;
    color: #ff5722; /* Accent color for header */
  }

  .header input {
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    width: 250px; /* Fixed width for search */
  }

  .content {
    display: flex;
    flex: 1; /* Fill remaining space */
    height: calc(100vh - 60px); /* Full height minus header */
  }

  .sidebar {
    width: 200px;
    background-color: #111; /* Dark sidebar */
    padding: 15px;
    box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
  }

  .sidebar h2 {
    margin: 0 0 15px;
    color: #ff5722; /* Accent color for sidebar */
  }

  .sidebar ul {
    list-style-type: none;
    padding: 0;
  }

  .sidebar li {
    margin: 10px 0;
    cursor: pointer;
    color: #ccc; /* Light gray for sidebar items */
    transition: color 0.3s; /* Smooth color transition */
  }

  .sidebar li:hover {
    color: #ff5722; /* Change color on hover */
  }
  
  .main-body{
    display: flex;
    flex-direction: column;
    overflow-y: auto; /* Scrollable if needed */
  }
  
  .heading{
    padding: 1.4rem 2rem;
  }

  .video-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three videos per row */
    gap: 20px;
    padding: 15px;
    flex: 1; /* Fill remaining space */
    background-color: #000; /* Black background for video grid */
  }

  .video-container {
    background: #222; /* Darker video container */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    padding: 10px;
    overflow: hidden;
    height: 320px; /* Fixed height for video container */
  }
  .image-container {
    background: #222; /* Darker video container */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    padding: 10px;
    overflow: hidden;
    height: 300px; /* Fixed height for video container */
  }
  img{
    width:100%;
  }

  .video-container h3 {
    margin: 10px 0 0;
    font-size: 1rem;
    color: #fff; /* White text for video titles */
  }

  video {
    width: 100%;
    height: 250px; /* Fixed height for videos */
    border-radius: 4px; /* Round corners for videos */
  }

  @media (max-width: 768px) {
    .sidebar {
      display: none; /* Hide sidebar on smaller screens */
    }

    .header {
      justify-content: center;
    }
    
    .header h1 {
      font-size: 22px; /* Smaller font size for header */
    }
    
    .header input {
      width: 200px; /* Smaller search box */
    }
    
    .video-grid {
      padding: 5px; /* Adjust padding for smaller screens */
      grid-template-columns: repeat(2, 1fr); /* Two videos per row on smaller screens */
    }
  }

  @media (max-width: 480px) {
    .video-grid {
      grid-template-columns: 1fr; /* One video per row on mobile */
    }
  }
`;

// Inject CSS styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;
