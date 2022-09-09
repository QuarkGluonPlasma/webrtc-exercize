import logo from './logo.svg';
import './App.css';
import { useCallback, useEffect, useMemo, useRef, useState, Component, useLayoutEffect, useContext, createContext } from 'react';
import context from './ctx';

function One() {
  return <div className="one">
    <h1>One</h1>
    <Two></Two>
  </div>
}

function Two() {
  return <div className="two">
    <h2>Two</h2>
    <context.Consumer>{
      (name) => {
        debugger;
          return <Three2></Three2>
      }
  }</context.Consumer>
  </div>
}

class Three2 extends Component {
  // const ctx = useContext(context);
  render() {
    const ctx = this.context;
    debugger;
  
    return <div className="three">
        <h3>Three</h3>
        {/* <p>{ctx}</p> */}
      </div>
  }
 
}

// class Bbb extends Component{
//   constructor() {
//     super();
//     this.state = {
//       aaa: 'xxxxxxx'
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       aaa: 111
//     });
//   }

//   render() {
//     return (<div>{this.state.aaa}</div>);
//   }
// }

// function App() {
//   const [name, setName] = useState("guang");
//   useState('dong');
//   useLayoutEffect(() => {
//     console.log('guang')
//   });

//   const handler = useCallback((evt) => {
//       setName('dong');
//   },[1]);

//   useEffect(() => {
//     console.log(1);
//   });
  
//   useRef(1);

//   useMemo(() => {
//     return 'guang and dong';
//   })

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={handler}>
//           {name}
//         </p>
//         <Bbb></Bbb>
//       </header>
//     </div>
//   );
// }

export default One;
