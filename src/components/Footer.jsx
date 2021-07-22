import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright By Chandan Singh ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
