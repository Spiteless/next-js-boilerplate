import React from "react";

function DefaultLayout(props) {
    return(
      <div className="default-layout">
          {props.children}
      </div>
    );
}

export default DefaultLayout;