import React from 'react';
import './Footer.css';
export default function Footer() {
  return (
    <div>
      <footer>
  <div className="copyright">
    <p>© Made by Nishika Mandloi</p>
  </div>
  <div className="social">
    <a href="/contact" className="support">Contact Us</a>
    <a href="https://example.org/" className="face">Our media</a>
    <a target="_blank" href="https://blogs.lse.ac.uk/southasia/2023/02/27/stuffed-granaries-and-empty-stomachs-hunger-in-india/#:~:text=According%20to%20the%20UN's%20Food,age%20women%20also%20being%20anemic." className="tweet">News</a>
    <a href="https://example.org/" className="linked">⚠️</a>
  </div>
</footer>
    </div>
  )
}
