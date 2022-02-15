const UseSaveAndRestore = (localStorageItem, itemIdentifier) => {
    
    const restoreItems = (localStorageItem) => {
      let savedItems = localStorage.getItem(localStorageItem);
      if (savedItems !== null && savedItems !== []) {
        let restoredItems = [];
        JSON.parse(savedItems).forEach((item) => {
          restoredItems.push(item);
        });
        return restoredItems;
      } else {
        return [];
      }
    };
  
    const [items, setItems] = useState(() => {
      return restoreItems(localStorageItem);
    });
  
    function addItemHandler(newItem) {
      setItems((prevItems) => {
        return [...prevItems, newItem].sort((a, b) => {
          if (a[itemIdentifier] < b[itemIdentifier]) {
            return -1;
          }
          if (a[itemIdentifier] > b[itemIdentifier]) {
            return 1;
          } else {
            return 0;
          }
        });
      });
    };
  
    function removeItemHandler(itemName) {
      setItems((prevItems) => {
        let index = -1;
        for (let i = 0; i < prevItems.length; i++) {
          if (prevItems[i][itemIdentifier] === itemName) {
            index = i;
            break;
          }
        }
        if (index !== -1) {
          prevItems.splice(index, 1);
        }
        return [...prevItems];
      });
    };
  
    return {
      items,
      addItemHandler,
      removeItemHandler
    };
  };
  
  export default UseSaveAndRestore;
  