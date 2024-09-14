import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export default function StoreContextProvider({ children }) {
  const [foodItems, setFoodItems] = useState(food_Items);
  const [selectedItems, setSeletedItems] = useState({});

  // console.log("selectedItejhhhhms",selectedItems)

  const add_items = (id) => {
    if (!selectedItems[id]) {
      setSeletedItems((prev) => {
        return { ...prev, [id]: 1 };
      });
    } else {
      setSeletedItems((prev) => {
        return { ...prev, [id]: prev[id] + 1 };
      });
    }
  };

  const remove_items = (id) => {
    setSeletedItems((prev) => {
      return { ...prev, [id]: prev[id] - 1 };
    });
  };

  return (
    <StoreContext.Provider
      value={{
        selectedItems,
        foodItems,
        setSeletedItems,
        setFoodItems,
        add_items,
        remove_items,
        food_Categories,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

const food_Items = [
  // Spring Rolls category
  {
    id: 1,
    name: "Vegetable Spring Roll",
    category: "Spring Rolls",
    price: 5.99,
    description:
      "Crispy rolls filled with fresh vegetables and served with a tangy dipping sauce.",
  },
  {
    id: 2,
    name: "Chicken Spring Roll",
    category: "Spring Rolls",
    price: 6.99,
    description:
      "Crispy spring rolls stuffed with seasoned chicken and veggies.",
  },
  {
    id: 3,
    name: "Shrimp Spring Roll",
    category: "Spring Rolls",
    price: 7.99,
    description:
      "Delicious spring rolls with shrimp, herbs, and glass noodles.",
  },
  {
    id: 4,
    name: "Pork Spring Roll",
    category: "Spring Rolls",
    price: 6.49,
    description: "Savory pork and vegetable filling wrapped in a crispy shell.",
  },
  {
    id: 5,
    name: "Tofu Spring Roll",
    category: "Spring Rolls",
    price: 5.49,
    description:
      "Vegan-friendly tofu spring rolls with a light and crispy texture.",
  },

  // Burger category
  {
    id: 6,
    name: "Classic Beef Burger",
    category: "Burgers",
    price: 8.99,
    description:
      "Juicy beef patty with lettuce, tomato, and cheese on a toasted bun.",
  },
  {
    id: 7,
    name: "Cheeseburger",
    category: "Burgers",
    price: 9.49,
    description:
      "Grilled beef patty topped with melted cheddar cheese and pickles.",
  },
  {
    id: 8,
    name: "Chicken Burger",
    category: "Burgers",
    price: 8.49,
    description:
      "Grilled chicken breast served with lettuce, tomato, and mayo.",
  },
  {
    id: 9,
    name: "Veggie Burger",
    category: "Burgers",
    price: 7.99,
    description:
      "A flavorful plant-based patty with fresh toppings on a whole-grain bun.",
  },

  // Salad category
  {
    id: 10,
    name: "Caesar Salad",
    category: "Salads",
    price: 6.99,
    description:
      "Crisp romaine lettuce, parmesan, croutons, and Caesar dressing.",
  },
  {
    id: 11,
    name: "Greek Salad",
    category: "Salads",
    price: 7.49,
    description:
      "A refreshing salad with tomatoes, cucumbers, olives, and feta cheese.",
  },
  {
    id: 12,
    name: "Cobb Salad",
    category: "Salads",
    price: 8.99,
    description:
      "Mixed greens topped with chicken, bacon, avocado, and blue cheese.",
  },
  {
    id: 13,
    name: "Garden Salad",
    category: "Salads",
    price: 5.99,
    description: "Fresh mixed greens with cucumbers, tomatoes, and carrots.",
  },

  // Dessert category
  {
    id: 14,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 4.99,
    description:
      "Rich and moist chocolate cake with a velvety chocolate frosting.",
  },
  {
    id: 15,
    name: "Cheesecake",
    category: "Desserts",
    price: 5.99,
    description:
      "Creamy New York-style cheesecake with a graham cracker crust.",
  },
  {
    id: 16,
    name: "Apple Pie",
    category: "Desserts",
    price: 3.99,
    description:
      "Classic apple pie with a flaky crust and cinnamon-spiced apples.",
  },
  {
    id: 17,
    name: "Brownie",
    category: "Desserts",
    price: 4.49,
    description:
      "Fudgy chocolate brownie topped with walnuts and a drizzle of caramel.",
  },

  // Pizza category
  {
    id: 18,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: 11.99,
    description:
      "Classic pizza topped with pepperoni, mozzarella, and marinara sauce.",
  },
  {
    id: 19,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 10.99,
    description:
      "Simple and delicious pizza with fresh tomatoes, mozzarella, and basil.",
  },
];

const food_Categories = [
  "All",
  "Spring Rolls",
  "Burgers",
  "Salads",
  "Desserts",
  "Pizza",
];
