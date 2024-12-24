import React from "react";
import CursorTrailCanvas from "./components/CursorTrailCanvas";


function App() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <CursorTrailCanvas
        color="#ff5733"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <h1 style={{ textAlign: "center", marginTop: "20%" }}>
        Cursor Trail Animation
      </h1>
    </div>
  );
}

export default App;
