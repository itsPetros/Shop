import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";
import Showitem from "./components/Showitem";





class App extends React.Component {
  
    constructor(props){
      super(props)
      this.state = {
        orders: [],
        currentItems: [],
        items: [
          {
            id: 1,
            title: 'Chair',
            img:  'chair.jpeg',
            desc: 'Lorem ipsum dolor sit amet',
            category: 'chairs',
            price:'69.99'
          },
          {
            id: 2,
            title: 'Sofa',
            img:  'sofa.jpeg',
            desc: 'Lorem ipsum dolor sit amet',
            category: 'sofas',
            price:'99.99'
          },
          {
            id: 3,
            title: 'Dining table',
            img:  'diningtable.jpg',
            desc: 'Lorem ipsum dolor sit amet',
            category: 'tables',
            price:'109.99'
          }
        ],
        showFullItem: false,
        fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory =this.chooseCategory.bind(this)
      this.onShowItem =this.onShowItem.bind(this)
      
    }
  
  render(){
       return (
            <div className="wrapper">
            <Header  orders={this.state.orders} onDelete={this.deleteOrder}/>
            <Categories  chooseCategory ={this.chooseCategory} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd ={this.addToOrder}  />

            {this.state.showFullItem && <Showitem onShowItem={this.onShowItem} onAdd ={this.addToOrder} item={this.state.fullItem} />}
            <Footer />
            </div>
              );
          }

    onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
      
    }

    chooseCategory(category) {
        if(category == 'all') {
          this.setState({currentItems: this.state.items})
          return;
        }

        this.setState({
          currentItems: this.state.items.filter(el => el.category == category)
        })
    }


    deleteOrder(id) {
           this.setState({orders: this.state.orders.filter(el => el.id !== id )})
    }

    addToOrder(item){
        let isInArray = false 
        this.state.orders.forEach(el =>{
          if(el.id === item.id){
            isInArray = true
          }
        })
        if (!isInArray){
        this.setState({orders: [...this.state.orders, item]})
    }
  }

}
export default App;
