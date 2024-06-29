const bag = {
  kg: 6
}

const items = [
  {kg: 3, price: 10, item: 'water'},
  {kg: 1, price: 3, item: 'book'},
  {kg: 2, price: 9, item: 'food'},
  {kg: 2, price: 5, item: 'jacket'},
  {kg: 1, price: 6, item: 'camera'}
]

// Condition: you have 6kg bag you need to find the most needed items. the higher price the more item is needed
function findMostOptimalItems(items, bag){
  const table = []
  for(let row = 0; row < items.length; row++){
    for(let col = 0; col < bag.kg; col++){
      if(!table[row]){
        table[row] = []
      }
      const item = items[row]
      const prevRow = table[row-1]
      if(item.kg <= col + 1){
        const prevMaxValue = prevRow?.[col] || 0
        const avaliableKgs = col + 1 - item.kg
        const avaliableIndex = col - item.kg
        let sumOfItems = 0;
        if(avaliableKgs > 0){
          if(prevRow?.[avaliableIndex]){
            sumOfItems = item.price + prevRow?.[avaliableIndex]
          }
        }
        table[row][col] = Math.max(prevMaxValue, sumOfItems, item.price)
      } else {
        table[row][col] = prevRow?.[col]
      }
    }
  }
  console.log(table)
  console.log("Price is: ", table[items.length - 1][bag.kg - 1])
}

findMostOptimalItems(items, bag)

