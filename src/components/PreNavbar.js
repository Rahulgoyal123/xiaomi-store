import React from "react";
import "../styles/PreNavbar.css";

const carticon = 
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    height="48"
    viewBox="0 -960 960 960"
    width="48"
  >
    <path d="M286.788-81Q257-81 236-102.212q-21-21.213-21-51Q215-183 236.004-204q21.005-21 50.5-21Q316-225 337.5-203.788q21.5 21.213 21.5 51Q359-123 337.788-102q-21.213 21-51 21Zm400 0Q657-81 636-102.212q-21-21.213-21-51Q615-183 636.004-204q21.005-21 50.5-21Q716-225 737.5-203.788q21.5 21.213 21.5 51Q759-123 737.788-102q-21.213 21-51 21ZM235-741l110 228h288l125-228H235Zm-67 452 113-209-152-322H51v-60h117l37 79h659L671-453H324l-56 104h491v60H168Zm177-224h288-288Z" />
    
  </svg>

const PreNavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">
          GET MI STORE APP
        </a>{" "}
        <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
          ONLINE HELP
        </a>{" "}
        <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">
          RENTAL STORE ˅
        </a>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
        <a href="https://account.xiaomi.com/pass/register">SIGN UP</a>{" "}
        <span>|</span>
        <a href="https://store.mi.com/in/site/login" > {carticon} CART (0)</a>
      </div>
    </div>
  );
};

export default PreNavbar;
