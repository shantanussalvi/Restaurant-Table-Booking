import images from './images';

const wines = [
  {
    title: 'Vegetable Samosa',
    price: '56/-',
    tags: 'Deep-fried pastry filled with spiced vegetables, 2 pieces.',
  },
  {
    title: 'Pakoras',
    price: '59/-',
    tags: 'Selection of five seasonal vegetables separately dipped in spicy chick pea batter and deep fried.',
  },
  {
    title: 'Aloo Set*',
    price: '44/-',
    tags: 'Deep-fried pastry filled with potatoes marinated in a mint tandoori infused sauce.',
  },
  {
    title: 'Dal Soup* ',
    price: '31/-',
    tags: 'Deliciously freshly prepared red lentil soup.',
  },
  {
    title: 'Onion Bhajia',
    price: '66/-',
    tags: 'Onion pieces marinated for 48 hours then battered with chickpea flour and fried. ',
  },
  {
    title: 'Tofia.E.Noor *',
    price: '75/-',
    tags: 'Roasted paneer in mustard, yoghurt and mint, skewered with capsicum, tomato and onion'
    ,
  },
];

const cocktails = [
  {
    title: 'Chicken Samosa',
    price: '120/-',
    tags: 'Deep-fried pastry filled with spiced chicken breasts, potato and turmeric.',
  },
  {
    title: "Tandoori Chicken",
    price: '160/-',
    tags: 'Chicken deeply marinated for 48 hours and smoke-roasted in Tandoor. ',
  },
  {
    title: 'Reshmi Kebab ',
    price: '100/-',
    tags: 'Minced chicken mixed with onions, herbs and spices, roasted in Tandoor on skewers. ',
  },
  {
    title: 'Seekh Kebab',
    price: '125/-',
    tags: 'Lamb mince with a touch of Indian spices infused with capsicum seeds onions then roasted in Tandoor on skewers.',
  },
  {
    title: 'Achari Fish Tikka ',
    price: '199/-',
    tags: 'Tender pieces of monkfish soaked in lime juice ,marinated in yoghurt and carom seeds with tempered spices, skewer roasted in the Tandoor oven',
  },
];

const vegSpecial = [
  {
    title: 'Vegetable Kashmiri Korma',
    price: '256/-',
    tags: 'A beautiful assortment of mixed vegetables cooked in spices, cream and fruit.',
  },
  {
    title: 'Vegetable Kofta',
    price: '259/-',
    tags: 'Spiced Vegetable Dumplings cooked in delicious gravy of onions, chopped nuts, coconut and fenugreek leaves.',
  },
  {
    title: 'Jalfrezi Bindi ',
    price: '244/-',
    tags: 'Okra finished with green capsicums and onions in a mint yoghurt mustard sauce.',
  },
  {
    title: 'Palak Paneer',
    price: '231/-',
    tags: 'Home-made diced cottage cheese cooked in chopped spinach and tomatoes',
  },
  {
    title: 'Malai kofta',
    price: '266/-',
    tags: 'Delicious dumplings of cashew coconut sultanas and potatoes finished in a delicate cream sauce',
  },
  {
    title: 'Shahi Paneer',
    price: '275/-',
    tags: 'Home made cottage cheese, cubed then simmered in a rich butter sauce with capsicum and honey'
    ,
  },
  {
    title: 'Broccoli Masala ',
    price: '215/-',
    tags: 'Broccoli, mushroom and capsicum, spiced and finished in a special onion sauce (Vegan).Home made cottage cheese, cubed then simmered in a rich butter sauce with capsicum and honey.'
    ,
  },
];

const nonvegSpecial = [
  {
    title: 'Butter Chicken',
    price: '345/-',
    tags: 'Roasted tandoori chicken cooked with cream, honey and tomatoes. Loved by many. (Mild)'
    ,
  },
  {
    title: 'Chicken Korma (Mild) ',
    price: '369/-',
    tags: 'Boneless chicken pieces cooked in cream finished with cashew nuts'
    ,
  },
  {
    title: 'Nawab Tikka',
    price: '455/-',
    tags: 'Succulent chicken thighs marinated 48 hours in cloves, ginger and North Indian ground spices, skewered and smoke roasted. '
    ,
  },
  {
    title: 'Murgh Masalam',
    price: '569/-',
    tags: 'This Tandoori dish represents tender chicken on the bone barbecued on skewers, then garnished with a Masala sauce of delicate herbs and rich unique home prepared spices: Medium or hot served with: Onion Kulcha, Palau Rice, Poppadoms and Chutney.'
    ,
  },
  {
    title: 'Fish Curry',
    price: '225/-',
    tags: 'Boneless pieces of tender Monkfish soaked in lime juice and finished in coconut cream with onions. (Mild, medium or hot)'
    ,
  },
  {
    title: 'Prawn Curry',
    price: '399/-',
    tags: 'Succulent prawns fully shelled soaked in lime juice overnight and finished with coconut, onions and green herbs. (Mild, medium or hot)'
    ,
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, vegSpecial,nonvegSpecial, awards };
