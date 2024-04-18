function HelloWorld() {
  const svg = (<div style={{margin:"auto"}}><svg height="300" width="400">
  <defs>
    <linearGradient id="gr1" x1="0%" y1="60%" x2="100%" y2="0%">
      <stop offset="5%" style="stop-color:rgb(255,255,3);stop-opacity:1" />
      <stop offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1" />
    </linearGradient>
  </defs>
  <ellipse cx="125" cy="150" rx="100" ry="60" fill="url(#gr1)" />
  <circle cx="200" cy="170" r="100"  fill="url(#gr1)" />
  Sorry but this browser does not support inline SVG.
  </svg></div>);
return(<>
  <div>Hello, world!</div>
  {svg}
  </>);
}

export default HelloWorld;
