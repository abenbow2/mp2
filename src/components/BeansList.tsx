// import React from 'react';
// import axios from 'axios';
// import type {Bean} from '../App.tsx';
import {
  Link
} from "react-router";
import fullBeansList from "./AllBeans.json";

// const beansList : Bean[] = [];

export default function BeansList(props : any) {
  // state = {
  //   beans: []
  // }
  // API Not working!
  // componentDidMount() {
    

  //   axios.get(`https://jellybellywikiapi.onrender.com/api/beans?pageIndex=1&pageSize=12`)
  //     .then(res => {
  //       const beans = res.data;
  //       this.setState({ beans });
  //       beans.items.forEach((bean : any, index : number) => {
  //         if (bean.flavorName != null) {
  //           beansList.push(bean);
  //           console.log(bean.flavorName);
  //           console.log(beansList);
  //         }
          
  //       });
  //     })
  //     .catch(err => {
  //       console.error('Error fetching data:', err);
  //     });
  // }

  // filter beanslist
  var dietFilteredBeans = fullBeansList;
  var filteredBeans = fullBeansList;

  if (props.dietfilter == "kosher") {

  } else {
    dietFilteredBeans = fullBeansList;
    console.log(dietFilteredBeans);
  }

  filteredBeans = dietFilteredBeans;

  if (props.colorfilter != null && props.colorfilter != "" && props.colorfilter != "any") {
    filteredBeans = dietFilteredBeans.filter((bean) => bean.color == props.colorfilter);
    console.log(filteredBeans);
    console.log(props.colorfilter);
  } else {
    filteredBeans = dietFilteredBeans;
  }

  return (
    <div id="galleryWall">
        {filteredBeans.map((bean:any) => (
          <div className={`gallerySquare bean-${bean.color}`}  key={bean.id}>
            <img className="beanImage" src={`${bean.url}`} alt={`${bean.name}`} />
            <Link to={`/details/${bean.id}`} className="galleryItem">{bean.name}</Link>
          </div>
          
        ))}
    </div>
  )
}