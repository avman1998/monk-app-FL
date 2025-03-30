export const RULES_CONFIG = () => [
  {
    id: "specific_collections",
    priority: 1,
    name: "Specific Collections",
    operatorsDropdown: {
      display: true,
      values: ["contains any", "is not"],
      selectedValue: "contains any",
    },
    valueDropdown: {
      display: true,
      values: [
        "Summer Collection",
        "Winter Wear",
        "Casual Shirts",
        "Formal Attire",
        "Sports Gear",
      ],
      selectedValues: [],
      placeholder: "Select collections",
    },
    exclusive_with: "specific_product",
  },
  {
    id: "product_tags",
    priority: 2,
    name: "Product tags",
    operatorsDropdown: {
      display: true,
      values: ["contains any", "is not"],
      selectedValue: "contains any",
    },
    valueDropdown: {
      display: true,
      values: [
        "New Arrival",
        "Best Seller",
        "Limited Edition",
        "Eco-Friendly",
        "Discounted",
      ],
      selectedValues: [],
      placeholder: "Search product tags",
    },
  },
  {
    id: "specific_product",
    priority: 3,
    name: "Specific products",
    operatorsDropdown: {
      display: true,
      values: ["equals anything", "contains any", "is not"],
      selectedValue: "equals anything",
    },
    valueDropdown: {
      display: true,
      values: [
        "Cotton T-Shirt",
        "Denim Jacket",
        "Running Shoes",
        "Leather Wallet",
        "Formal Shirt",
      ],
      selectedValues: [],
      placeholder: "Select products",
    },
    exclusive_with: "specific_collections",
  },
  {
    id: "product_subscribed",
    priority: 4,
    name: "Product subscribed",
    operatorsDropdown: {
      display: true,
      values: ["Yes", "No"],
      selectedValue: "Yes",
    },
  },
  {
    id: "special_discount_codes",
    priority: 5,
    name: "Special discount codes",
    input: {
      display: true,
      value: "",
    },
  },
  {
    id: "cart_value_range",
    priority: 6,
    name: "Cart value range",
    operatorsDropdown: {
      display: true,
      values: ["is equal or greater than", "is between", "is less than"],
      selectedValue: "is equal or greater than",
    },
    currencyInput: {
      display: true,
      value: "",
    },
    input: {
      display: true,
      value: "",
    },
  },
];
