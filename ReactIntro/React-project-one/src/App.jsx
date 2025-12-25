import React from 'react';
import NewProduct from './components/NewProduct';
import Products from './components/Products';

const App = () => {
  const products = [
    {
      id: 'p1',
      title: 'Aata',
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: 'p2',
      title: 'Surf Excel',
      amount: 200,
      date: new Date(2021, 2, 2),
    },
    {
      id: 'p3',
      title: 'Tide',
      amount: 138,
      date: new Date(2021, 12, 28),
    },
    {
      id: 'p4',
      title: 'Maggi',
      amount: 450,
      date: new Date(2021, 5, 5),
    },
  ];

  // function printProductData(data) {
  //   console.log("I am inside App.js");
  //   console.log(data);
  // }


  function printProductData(data){
    console.log(data);
    console.log("I am under the App.js");
  }

  return (
    <div>
      <NewProduct pranay={printProductData}/>
      <Products items={products} />
    </div>
  );
}

export default App;