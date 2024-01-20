export const color = [
  "white",
  "Black",
  "Red",
  "marun",
  "Being",
  "Pink",
  "Green",
  "Yellow",
  "Maroon",
  "Black",
  "Pink",
  "Rust Pink",
  "Red Wine",
  "Indigo",
  "Blue Moon",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "black", label: "Black" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      {value:"yellow",label:"Yellow"},
      {value:"maroon",label:"Maroon"},
      {value:"pink",label:"Pink"},
      {value:"Rust Pink",label:"Rust Pink"},
      {value:"Red Wine",label:"Red Wine"},
      {value:"Indigo",label:"Indigo"},
      {value:"Blue Moon",label:"Blue Moon"},
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "S", label: "S" },
      { value: "M", label: "M" },
      { value: "L", label: "L" },
    ],
  },
  
];

export const singleFilter=[
  {
    id: "price",
    name: "Price",
    options: [
      { value: "0-50", label: "$0 To $50" },
      { value: "50-100", label: "$50 To $100" },
      { value: "100-150", label: "$100 To $150" },
      { value: "150-999", label: "$150 To $999" },
      { value: "999-1999", label: "$999 To $1999" },
      { value: "1999-2999", label: "$1999 To $2999" },
      { value: "3999-4999", label: "$3999 To $4999" },
    ],
  },
  {
    id: "rating",
    name: "Ratings",
    options: [
      { value: "5", label: "5" },
      { value: "4", label: "4 & Above" },
      { value: "3", label: "3 & Above" },
      { value: "2", label: "2 & Above" },
      { value: "1", label: "1 & Above" },
    ],
  },
  {
    id: "brand",
    name: "Brands",
    options: [
      { value: "roadster", label: "Roadster" },
      { value: "wrong", label: "wrong" },
      { value: "dokotoo", label: "Dokotoo" },
      { value: "lomon", label: "LOMON" },
      { value: "acevog", label: "ACEVOG" },
      { value: "yesno", label: "YESNO" },
      { value: "dresstells", label: "DRESSTELLS" },
      { value: "merokeety", label: "MEROKEETY" },
      { value: "gap", label: "GAP" },
      { value: "Levis", label: "Levi's" },
      { value: "guess", label: "Guess" },
      { value: "dkny", label: "DKNY" },
      { value: "tommy hilfiger", label: "Tommy Hilfiger" },
      { value: "samsung", label: "SAMSUNG" },
      { value: "toshiba", label: "Toshiba" },
      { value: "insignia", label: "INSIGNIA" },
      { value: "apple", label: "Apple" },
      { value: "motorola", label: "Motorola" },
      { value: "fujifilm", label: "Fujifilm" },
      { value: "camkory", label: "CAMKORY" },
    ],
  },
  {
    id: "disccout",
    name: "Disccount Range",
    options: [
      {
        value: "10",
        label: "10% And Above",
      },
      { value: "20", label: "20% And Above" },
      { value: "30", label: "30% And Above" },
      { value: "40", label: "40% And Above" },
      { value: "50", label: "50% And Above" },
      { value: "60", label: "60% And Above" },
      { value: "70", label: "70% And Above" },
      { value: "80", label: "80% And Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
      
    ],
  },
]

export const sortOptions = [
  
  { name: "Price: Low to High", query: "price_low", current: false },
  { name: "Price: High to Low", query: "price_high", current: false },
];
