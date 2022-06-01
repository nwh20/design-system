import * as React from "react";

export const Switch = () => {
  const [isOn, setIsOn] = React.useState(false);

  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "on" : "off"}</button>;
};

Switch.displayName = "Switch";
