import logo from './logo.svg';
import './App.css';
import Pano from './component/Pano';

function App() {
  const imageList = [
    {key: 1, image: '/collage.jpg', linkTo: 2, linkPositon: (-3429.01, 1205.85, -3421.88)},
    {key: 2, image: '/skyview01.jpg', linkTo: 1, linkPositon: (-3429.01, 1205.85, -3421.88)}
    ];

  return (
    <div className="App">
      <Pano imageList={imageList}/>
    </div>
  );
}

export default App;
