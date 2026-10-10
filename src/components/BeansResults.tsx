import {
  Link
} from "react-router";
import fullBeansList from "./AllBeans.json";

export default function BeansResults(props : any) {
  const filteredBeans = fullBeansList.filter((el : any) => {
    if (props.input == '') {
        return el;
    } else {
        return el.name.toLowerCase().includes(props.input)
    }
  })

  // sorting filteredBeans
  if (props.sortby == "name") {
    filteredBeans.sort((a,b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    if (props.direction == "descending") {
      filteredBeans.reverse();
    }
  } else {
    filteredBeans.sort((a,b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id > b.id) {
        return 1;
      }
      return 0;
    });
    if (props.direction == "descending") {
      filteredBeans.reverse();
    }
  }
  

    return (
      <div id="searchList">
          {filteredBeans.map((bean:any) => (
            <div className={`searchResult bean-${bean.color}`} key={bean.id}>
              <img className="beanImage" src={`${bean.url}`} alt={`${bean.name}`} />
              <Link to={`/details/${bean.id}`} className="galleryItem">{bean.name}</Link>
              <img className="beanImage" src={`${bean.url}`} alt={`${bean.name}`} />
            </div>
            
          ))}
      </div>
    )
}