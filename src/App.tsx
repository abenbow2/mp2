
// import favicon from './assets/favicon.png'
import './App.css'
import { Outlet, useParams } from "react-router-dom";
import {
  Route,
  Routes,
  Link
} from "react-router";
import BeansList from './components/BeansList.js';
import BeansResults from './components/BeansResults.js';
import { useState } from 'react';
import fullBeansList from "./components/AllBeans.json";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Search />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/details/:id" element = {<Details />} />
      </Route>
    </Routes>
  );
}


function Layout() {
  return(
    <div>
      <div id="header">
        <h1>BEANS! BEANS! BEANS!</h1>
        <div>
          <Link className="navlink" to="" id="list-view-button">    SEARCH    </Link>
          <Link className="navlink" to="Gallery" id="gallery-view-button">    GALLERY    </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
function Search() {
  const [userInput, setUserInput] = useState("");
  let inputHandler = (event : any) => {
    var lowerinput : string = event.target.value.toLowerCase();
    setUserInput(lowerinput);
  };

  const [direction, setDirection] = useState("");
  let directionHandler = (event : any) => {
    var direction : string = event.target.value.toLowerCase();
    setDirection(direction);
    console.log(direction);
  };

  const [sortby, setSortby] = useState("");
  let sortbyHandler = (event : any) => {
    var sortby : string = event.target.value.toLowerCase();
    setSortby(sortby);
    console.log(sortby);
  };

  return(
    <div>
      <div className='column'>
        <input type="text" id="search-bar" onChange={inputHandler} placeholder="Search..."></input>
        <div id="sort-search-results">
          <label htmlFor="sortby">Sort search results by...</label>
          <select name="sortby" id="sortby" onChange={sortbyHandler}>
            <option value="id">ID</option>
            <option value="name">Name</option>
          </select>
          <select name="sortdirection" id="sortdirection" onChange={directionHandler}>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
          </select>
        </div>
      </div>
      
      
      <div id="search-results">
        <BeansResults sortby={sortby} direction={direction} input={userInput}/>
      </div>
    </div>
  );

}

function Gallery() {
  
  //const [data, setData] = useState([]);
  // useEffect(() => {
  //   axios
  //       .get(``)
  //       .then((response) => {
  //         setData(response.data);
  //       })
  //       .catch((err) => console.error(err));
  // }, []);

  const [dietfilter, setFilter] = useState("");
  let filterbyHandler = (event : any) => {
    var dietfilter : string = event.target.value.toLowerCase();
    setFilter(dietfilter);
  };

  const [color, setColor] = useState("");
  let colorHandler = (event : any) => {
    var color : string = event.target.value.toLowerCase();
    setColor(color);
  };

  return(
    <div>
      <div>
        <label htmlFor="filterby">Dietary Restrictions: </label>
        <select name="filterby" id="filterby" onChange={filterbyHandler}>
          <option value="none">None</option>
          <option value="kosher">Kosher</option>
          <option value="glutenfree">Gluten-free</option>
        </select>

        <label htmlFor="colorfilter">Color: </label>
        <select name="colorfilter" id="colorfilter" onChange={colorHandler}>
          <option value="any">Any</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="pink">Pink</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
          <option value="black">Black</option>
        </select>
      </div>

      <BeansList dietfilter={dietfilter} colorfilter={color}/>
      
    </div>
  );
  
}

function Details() {
   
  var params : any = useParams();
  var bean = null;

  var prev : number = parseInt(params.id) - 1;
  var next : number = parseInt(params.id) + 1;

  if (params.id >= fullBeansList.length || params.id == 0) {
    bean = fullBeansList[0];
    prev = fullBeansList.length - 1;
    next = 1;
  } else if (params.id < 0) {
    bean = fullBeansList[fullBeansList.length - 1];
    prev = fullBeansList.length - 2;
    next = 0;
  }
  else {
    bean = fullBeansList[params.id];
  } 
  
  
  return(
    <div id="detailsBG">
      <div className="beanDetails">
        <div className='beanMainDetails'>
          <img className="beanDetailsImage" src={`${bean.url}`} alt={`${bean.name}`} />
          <div className='beanText'>
            <h2 className="beanHeader">{bean.name}</h2>
            <p>Kosher? {bean.kosher}</p>
            <p>Gluten-free? {bean['gluten-free']}</p>
          </div>
        </div>
        
        <br></br>
        <div>
          <Link className="prevnext" to={`/details/${prev}`}>PREVIOUS</Link>
          <Link className="prevnext" to={`/details/${next}`}>   NEXT   </Link>
        </div>
      </div>
      
    </div>
  );

}
