// import { useEffect } from 'react';

// const TawkToChat = () => {
//   useEffect(() => {
//     // Create the Tawk.to script element
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = 'https://embed.tawk.to/6738624f2480f5b4f59eedc6/1icq401ti'; // Replace with your unique Tawk.to URL
//     script.charset = 'UTF-8';
//     script.setAttribute('crossorigin', '*');
//     document.body.appendChild(script);

//     // Cleanup function to remove script when component unmounts
//     return () => {
//       // Hide the Tawk.to widget if it's active
//       if (window.Tawk_API) {
//         window.Tawk_API.hideWidget();
//       }
//       // Remove the script from the DOM
//       document.body.removeChild(script);
//     };
//   }, []); // Empty dependency array ensures this runs once per mount/unmount cycle

//   return null; // No UI to render
// };

// export default TawkToChat;

import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

const TawkToChat = ({ 
  propertyId = '6738624f2480f5b4f59eedc6',
  widgetId = '1icq401ti',
  showButton = true 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initTawkTo = () => {
      try {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        
        script.onload = () => {
          setIsLoaded(true);
        };

        script.onerror = () => {
          setError('Failed to load chat widget');
          setIsLoaded(false);
        };

        document.body.appendChild(script);

        // Initialize Tawk_API if it doesn't exist
        if (!window.Tawk_API) {
          window.Tawk_API = {};
          window.Tawk_LoadStart = new Date();
        }

        return () => {
          if (window.Tawk_API) {
            window.Tawk_API.hideWidget();
          }
          document.body.removeChild(script);
        };
      } catch (err) {
        setError('Error initializing chat widget');
        console.error('TawkTo initialization error:', err);
      }
    };

    initTawkTo();
  }, [propertyId, widgetId]);

  const toggleWidget = () => {
    if (window.Tawk_API) {
      if (isVisible) {
        window.Tawk_API.hideWidget();
      } else {
        window.Tawk_API.showWidget();
      }
      setIsVisible(isVisible);
    }
  };

  // Don't render the button if showButton is false
  if (showButton) return null;

  return (
    <div className="fixed bottom-11 left-6 z-50">
      {error ? (
        <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg shadow-lg">
          {error}
        </div>
      ) : (
        <button
          onClick={toggleWidget}
          className="group flex items-center gap-2 bg-[#243388] hover:bg-[#1a2666] 
                   text-white px-4 py-3 rounded-full shadow-lg 
                   transform transition-all duration-200 hover:scale-105"
          aria-label="Toggle chat widget"
        >
          {/* <MessageCircle 
            className={`h-6 w-6 transition-transform duration-200 
                     ${isVisible ? 'rotate-0' : 'rotate-180'}`} 
          /> */}
          {/* <span className="text-sm font-medium">
            {isVisible ? 'Hide Chat' : 'Chat with Us'}
          </span> */}
          {isLoaded && (
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full 
                           rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 
                           bg-green-500"></span>
            </span>
          )}
        </button>
      )}
    </div>
  );
};

export default TawkToChat;