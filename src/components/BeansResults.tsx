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

    return (
      <div id="searchList">
          {filteredBeans.map((bean:any) => (
            <div className={`searchResult bean-${bean.color}`} key={bean.id}>
              <Link to={`/details/${bean.id}`} className="galleryItem">{bean.name}</Link>
            </div>
            
          ))}
      </div>
    )
}