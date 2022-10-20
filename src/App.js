import './App.css';
// import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


// const user = "Supratim Majumder";

// function formatName(user) {
//   return user.fname + ' ' + user.lname;
// }

function App() {
  // let userObject = {
  //   fname: "Sayan",
  //   lname: "Dhar"
  // };

  // return (<>
  //   <nav>
  //     <li>Home</li>
  //     <li>About</li>
  //     <li>Contact</li>
  //   </nav>
  //   <div className="container">
  //     <h1>Welcome {user}</h1>
  //     <h3>Hello <i>{formatName(userObject)}</i></h3>
  //     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem sint cupiditate corrupti? At tempore expedita obcaecati. Iste inventore, deleniti similique aliquid quidem incidunt totam et culpa dignissimos. Cumque soluta hic perferendis maiores facere similique?</p>
  //   </div>
  // </>);

  // return (
  //   <div className="blank">
  //     This is Lovely
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React with CodeWithHarry
  //       </a>
  //     </header>
  //   </div>
  // );

  // return (
  //   <>
  //     <h1>This is Heading</h1>
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React with CodeWithHarry
  //         </a>
  //       </header>
  //     </div>
  //   </>
  // );

  return (<>
    {/* <Navbar /> */}
    <Navbar title="TextUtils" homeText="Home" aboutText="About Us" />
    <TextForm heading="Enter the text to analyze below" />
    {/* <AboutUs /> */}
  </>);
}

export default App;
