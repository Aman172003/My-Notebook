import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // jab bhi alert pop up hota hai to layout shift hota that's not a great user experience
    // to isko rokne ke liye height set kr denge
    <div style={{ height: "50px" }}>
      {/* agar props.alert false hai to aage ka execute mat kro nhi to kro */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
