// src/components/ScrollingMarquee.jsx
import './ScrollingMarquee.css';      // ➊ add styles next step

export default function ScrollingMarquee() {
  return (
    <div className="marquee" style={{ '--speed': '22s' }}>
      <div className="marquee__track">
        {/*  put each scrolling item only once  */}
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>React JS</span>
        <span>Node JS</span>
        <span>SQL</span>
      </div>
    </div>
  );
}
