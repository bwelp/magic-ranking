import { useState, useCallback } from "react";

const UseSaveAndRestore = (url, itemIdentifier) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const restoreItems = useCallback(async (url_db, type) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url_db);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      console.log(data);

      const loadedItems = [];

      if (type === "players") {
        for (const key in data) {
          loadedItems.push({
            id: key,
            player: data[key].player,
          });
        }
      } else if (type === "decks") {
        for (const key in data) {
          loadedItems.push({
            id: key,
            deckname: data[key].deckname,
            player: data[key].player,
            commander: data[key].commander,
            secondCommander: data[key].secondCommander,
            colorWhite: data[key].colorWhite,
            colorBlue: data[key].colorBlue,
            colorBlack: data[key].colorBlack,
            colorRed: data[key].colorRed,
            colorGreen: data[key].colorGreen,
            colorless: data[key].colorless,
          });
        }
      } else {
        for (const key in data) {
          loadedItems.push({
            id: key,
            gameId: data[key].gameId,
            players: data[key].players,
            decks: data[key].decks,
            gameRound: data[key].gameRound,
            gameLocation: data[key].gameLocation,
            gameDate: data[key].gameDate,
          });
        }
      }
    
      setItems(loadedItems);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  async function addItemHandler(newItem) {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);

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
  }

  const removeItemHandler = (itemName) => {
    console.log(itemName);
  };

  // let content = <p>Found no movies.</p>;

  // if (movies.length > 0) {
  //   content = <MoviesList movies={movies} />;
  // }

  // if (error) {
  //   content = <p>{error}</p>;
  // }

  // if (isLoading) {
  //   content = <p>Loading...</p>;
  // }

  // function addItemHandler(newItem) {
  //     setItems((prevItems) => {
  //       return [...prevItems, newItem].sort((a, b) => {
  //         if (a[itemIdentifier] < b[itemIdentifier]) {
  //           return -1;
  //         }
  //         if (a[itemIdentifier] > b[itemIdentifier]) {
  //           return 1;
  //         } else {
  //           return 0;
  //         }
  //       });
  //     });
  //   };

  
  
  // const restoreItems = (localStorageItem) => {
  //   let savedItems = localStorage.getItem(localStorageItem);
  //   if (savedItems !== null && savedItems !== []) {
  //     let restoredItems = [];
  //     JSON.parse(savedItems).forEach((item) => {
  //       restoredItems.push(item);
  //     });
  //     return restoredItems;
  //   } else {
  //     return [];
  //   }
  // };

  // const [items, setItems] = useState(() => {
  //   return restoreItems(localStorageItem);
  // });

  // function addItemHandler(newItem) {
  //   setItems((prevItems) => {
  //     return [...prevItems, newItem].sort((a, b) => {
  //       if (a[itemIdentifier] < b[itemIdentifier]) {
  //         return -1;
  //       }
  //       if (a[itemIdentifier] > b[itemIdentifier]) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //   });
  // };

  // function removeItemHandler(itemName) {
  //   setItems((prevItems) => {
  //     let index = -1;
  //     for (let i = 0; i < prevItems.length; i++) {
  //       if (prevItems[i][itemIdentifier] === itemName) {
  //         index = i;
  //         break;
  //       }
  //     }
  //     if (index !== -1) {
  //       prevItems.splice(index, 1);
  //     }
  //     return [...prevItems];
  //   });
  // };

  return {
    items,
    error,
    isLoading,
    restoreItems,
    addItemHandler,
    removeItemHandler
  };
};

export default UseSaveAndRestore;
