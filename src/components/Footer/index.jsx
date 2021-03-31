/*
 * Copyright (c) 2021. All rights reserved.
 */
import React from "react";
//import "./footer.css"
/* Footer Bottom */

function Footer() {
  return (
    <div className="footer-bottom">
      <p className="text-xs-center text-light">
        &copy;{new Date().getFullYear()} Iuris-Tech - All rights reserved
      </p>
    </div>
  );
}
export default Footer;
