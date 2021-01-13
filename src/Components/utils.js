const { max_items, host_name } = require("../config");

export function addToList(category, name, number, price, list, sum) {

    if (list[0].length === Number(max_items)) {
      alert("מקסימום מוצרים")
      return;
    }

    // check if category and name contain only letters a to z, A to Z, and א עד ת. allow spaces between words, no empty words.
    if (!/^[a-z][a-z\s]*$/.test(category) && !/^[א-ת][א-ת\s]*$/.test(category)) { 
      alert("קטגוריה שגויה")
      return;
    }

    if (!/^[a-z][a-z\s]*$/.test(name) && !/^[א-ת][א-ת\s]*$/.test(name)) {
      alert("שם שגוי")
      return;
    }

    // check if number and price contain only digits, no empty words.
    if (!/^\d+$/.test(number)) {
      alert("מספר שגוי")
      return;
    }

    if (!/^\d+$/.test(price)) {
      alert("מספר שגוי")
      return;
    }

    // Check with server if item exists.
    var data = {
      category: category,
      name: name,
      number: number,
      price: price,
      totalPrice: number * price
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };
    
    fetch(host_name + 'addItem', requestOptions)
      .then(response => {

        var tmp;

        if (response.status === 201) {
          tmp = [...list[0]]
          let pervTotalPrice

          tmp.forEach(ele => {
            if(ele.category === category && ele.name === name) {
              pervTotalPrice = parseInt(ele.number) * parseInt(ele.price)
              ele.number = parseInt(number)
              ele.price = parseInt(price)
              ele.totalPrice = parseInt(ele.totalPrice) - pervTotalPrice + parseInt(price * number)
            }
          })

          sum[1](s => s - pervTotalPrice + (price * number))
          list[1](tmp)
        }
        else {
          tmp = [...list[0]]

          tmp.push({
            category: category,
            name: name,
            number: number,
            price: price,
            totalPrice: price * number
          })
      
          sum[1](s => s + price * number)
          list[1](tmp)
        }
      })
}