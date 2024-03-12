// import './App.css';
// import MyGifComponent from "./MyGifComponent";
import ConfettiButton from './ConfettiButton'
import Text from "./Text";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const newLocal = `
  body {
    background-image: url('../Rectangle.png');
    background-size: cover;
    background-position: center;
    background-repeat:no-repeat;
    margin:0;
    padding:0;
    color:white;
    height: 100vh;
  }
  .main{
    display: flex;
    justify-content: center; /* Horizontally center */
    align-items: center; /* Vertically center */
    height: 100vh; /* Set full viewport height */
  }
  .app-container {
    text-align: center; /* Center align children */
  }
  .app-content {
    margin-top: 0px; /* Adjusted margin */
  }
 
  `;
  return (
    <div className='main'>
      <div className="app-container container">
        <div className="app-content">
          <div className="txt">
            <Text></Text>
          </div>
          <ConfettiButton></ConfettiButton>
        </div>
      </div>
      <style>
        {newLocal}
      </style>
    </div>
  );
}

export default App;
