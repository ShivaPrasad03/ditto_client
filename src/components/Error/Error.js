import "./Error.css";

 const Error=()=>{
  return (
    <div className="main-error-cont">
        <div className="error-card">
      <div className="error-navbar"></div>
      <div className="error-content">
        <h1>Something error occurred</h1>
        <div>
          <p>These might be the reasons, please look and try again</p>
          <ul>
            <li>Check your internet connection</li>
            <li>Check the URL you are requesting for</li>
            <li>
              Check whether VPN is activated in your device. If there is VPN
              activated, please deativate and try again.
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Error
