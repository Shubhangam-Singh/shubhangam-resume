import React from 'react'
import './ScrollingFooter.css'   // ➊  create this file next to the component

export default function ScrollingFooter() {
  return (
    <footer className="scroll-footer" aria-label="Site credits">
      {/* ➋  ORIGINAL CONTENT – list it only once */}
      <div className="scroll-track">
        <span className="txt">Made&nbsp;with</span>
        <span className="heart">❤️</span>
        <span className="txt">by&nbsp;Shubhangam</span>
        <span className="dot">•</span>
        <span className="txt">Built&nbsp;with&nbsp;React</span>
        <span className="react">⚛️</span>
        <span className="dot">•</span>
        <span className="txt">Deployed&nbsp;on&nbsp;Vercel</span>
        <span className="vercel">▲</span>
        <span className="dot">•</span>
      </div>
      {/* the :after pseudo element duplicates .scroll-track for a perfect loop */}
    </footer>
  )
}
