
// import favicon from './assets/favicon.png'
import './App.css'
import { Outlet, useParams } from "react-router-dom";
import {
  Route,
  Routes,
  Link
} from "react-router";
import BeansList from './components/BeansList.js';

export type Bean = {
  id: number;
  name: string;
  color: string;
}

const beansList : Bean[] = [];

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
  return(
    <div>
      <input type="text" id="search-bar" placeholder="Search..."></input>
      <div id="search-results"></div>
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

  return(
    <div>
      <BeansList />
      
    </div>
  );
  
}

function Details() {
  const flavors : string[] = ["Root Beer", "Berry Blue", "Blueberry", "Bubble Gum", "Buttered Popcorn", "Cantaloupe", "Cappuccino", "Caramel Corn", "Chocolate Pudding", "Cinnamon", "Coconut", "Cotton Candy", "Crushed Pineapple", "Dr Pepper", "French Vanilla", "Green Apple"];
  const colors : string[] = ["brown", "blue", "blue", "pink", "yellow", "orange", "brown", "yellow", "brown", "red", "white", "blue", "yellow", "brown", "white", "green"];
      
  var params : any = useParams();
  var bean = null;
  if (beansList.length < 1) {
    for (let i = 0; i < colors.length; i++) {
      let bean : Bean = {id: i, name: flavors[i], color: colors[i]};
      beansList.push(bean);
    }
  }

  var prev : number = parseInt(params.id) - 1;
  var next : number = parseInt(params.id) + 1;

  if (params.id >= flavors.length) {
    bean = beansList[0];
    prev = flavors.length - 1;
    next = 1;
  } else if (params.id < 0) {
    bean = beansList[beansList.length - 1];
    prev = flavors.length - 2;
    next = 0;
  }
  else {
    bean = beansList[params.id];
  } 
  
  
  return(
    <div id="detailsBG">
      <div className="beanDetails">
        <div>
           <h2 className="beanHeader">{bean.name}</h2>
           <br></br>
           <p>If the API was working, here I would list additional information like the ingredients and whether the jelly bean was gluten free</p>
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
