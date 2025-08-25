import React from 'react'

const ScrollingFooter = () => {
  return (
    <div className="scrolling-footer-container">
      <div className="scrolling-content">
        {/* Multiple repetitions for seamless loop */}
        {[...Array(3)].map((_, index) => (
          <div key={index} className="scroll-text">
            <span className="text-item">Made with</span>
            <span className="heart-emoji">❤️</span>
            <span className="text-item">by Shubhangam</span>
            <span className="separator">•</span>
            <span className="text-item">Built with React</span>
            <span className="react-emoji">⚛️</span>
            <span className="separator">•</span>
            <span className="text-item">Deployed on Vercel</span>
            <span className="vercel-emoji">▲</span>
            <span className="separator">•</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .scrolling-footer-container {
          width: 100%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 16px 0;
          overflow: hidden;
          position: relative;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
        }

        .scrolling-footer-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          animation: shimmer 3s ease-in-out infinite;
        }

        .scrolling-content {
          display: flex;
          animation: scroll 25s linear infinite;
          white-space: nowrap;
        }

        .scroll-text {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-right: 40px;
          font-size: 16px;
          font-weight: 500;
        }

        .text-item {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .heart-emoji {
          font-size: 20px;
          animation: heartbeat 2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(255, 100, 100, 0.6));
        }

        .react-emoji {
          font-size: 18px;
          animation: spin 3s linear infinite;
          filter: drop-shadow(0 0 8px rgba(97, 218, 251, 0.6));
        }

        .vercel-emoji {
          font-size: 16px;
          animation: bounce 2s ease-in-out infinite;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.6));
        }

        .separator {
          opacity: 0.6;
          font-size: 18px;
          animation: pulse 2s ease-in-out infinite;
        }

        /* Animations */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes heartbeat {
          0%, 50%, 100% {
            transform: scale(1);
          }
          25%, 75% {
            transform: scale(1.2);
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .scrolling-footer-container {
            padding: 12px 0;
          }

          .scroll-text {
            font-size: 14px;
            gap: 8px;
            padding-right: 30px;
          }

          .heart-emoji {
            font-size: 16px;
          }

          .react-emoji {
            font-size: 14px;
          }

          .vercel-emoji {
            font-size: 12px;
          }

          .scrolling-content {
            animation-duration: 20s;
          }
        }

        @media (max-width: 480px) {
          .scroll-text {
            font-size: 12px;
            gap: 6px;
            padding-right: 25px;
          }

          .scrolling-content {
            animation-duration: 15s;
          }
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .scrolling-content {
            animation: none;
          }
          
          .heart-emoji,
          .react-emoji,
          .vercel-emoji,
          .separator {
            animation: none;
          }
          
          .scrolling-footer-container::before {
            animation: none;
          }
        }

        /* Hover Effects */
        .scrolling-footer-container:hover .scrolling-content {
          animation-play-state: paused;
        }

        .scrolling-footer-container:hover .text-item {
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  )
}

export default ScrollingFooter
