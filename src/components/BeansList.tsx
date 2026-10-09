import React from 'react';
// import axios from 'axios';
import type {Bean} from '../App.tsx';
import {
  Link
} from "react-router";

const beansList : Bean[] = [];

export default class BeansList extends React.Component {
  state = {
    beans: []
  }
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

  render() {
    const flavors : string[] = ["Root Beer", "Berry Blue", "Blueberry", "Bubble Gum", "Buttered Popcorn", "Cantaloupe", "Cappuccino", "Caramel Corn", "Chocolate Pudding", "Cinnamon", "Coconut", "Cotton Candy", "Crushed Pineapple", "Dr Pepper", "French Vanilla", "Green Apple"];
    const colors : string[] = ["brown", "blue", "blue", "pink", "yellow", "orange", "brown", "yellow", "brown", "red", "white", "blue", "yellow", "brown", "white", "green"];
    if (beansList.length < 1) {
      for (let i = 0; i < colors.length; i++) {
        let bean : Bean = {id: i, name: flavors[i], color: colors[i]};
        beansList.push(bean);
      }
    }
    
    return (
      <div id="galleryWall">
          {beansList.map((bean:any) => (
            <div className={`gallerySquare bean-${bean.color}`}>
              <Link to={`/details/${bean.id}`} className="galleryItem" key={bean.id}>{bean.name}</Link>
            </div>
            
          ))}
      </div>
    )
  }
}