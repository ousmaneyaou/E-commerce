import P1 from './P5.png';
import P2 from './p2.jpg';
import P3 from './P7.webp';
import P4 from './P8.jpg';
import P5 from './P9.jpeg';
import P6 from './P11.webp';
import P7 from './P10.jpg';
import P8 from './P8.jpg';
import E1 from './E1.avif';
import E2 from './E2.avif';
import E3 from './E3.avif';
import T1 from './T1.jpg';
import T2 from './T2.jpg';
import T3 from './T3.jpg';
import T4 from './T4.png';
import T5 from './T5.jpg';
import T6 from './T6.jpg';
import T7 from './T7.jpg';
import T8 from './T8.jpg';
import T9 from './T9.jpg';
import T10 from './T10.jpg';
import TB1 from './TB1.webp';
import TB2 from './TB2.jpg';
import TB3 from './TB3.webp';
import TB4 from './TB4.webp';
import TB5 from './TB5.jpg';
import TB6 from './TB6.webp';
import W1 from './W1.avif';
import W2 from './W2.avif';
import W3 from './W3.avif';
import W4 from './W4.avif';
import W5 from './W5.avif';
import W6 from './W6.avif';
import S1 from './S1.webp';
import S2 from './S2.jpg';
import S3 from './S3.jpg';
import I1 from './I1.png';
import I2 from './I2.jpg';
import I3 from './I3.webp';
import I4 from './I4.jpg';
import I5 from './I5.webp';
import I6 from './I6.jpg';

let allProduct = [
  {
    id: 1,
    name: "Ordinateur",
    category: "ordinateur",
    image: P1,
    newPrice: 50.0,
    oldPrice: 80.5
  },
  {
    id: 2,
    name: "Ordinateur",
    category: "ordinateur",
    image: P2,
    newPrice: 120.0,
    oldPrice: 150.0
  },
  {
    id: 3,
    name: "Ordinateur",
    category: "ordinateur",
    image: P3,
    newPrice: 200.0,
    oldPrice: 250.0
  },
  {
    id: 4,
    name: "Ordinateur",
    category: "ordinateur",
    image: P4,
    newPrice: 400.0,
    oldPrice: 500.0
  },
  {
    id: 5,
    name: "Ordinateur",
    category: "ordinateur",
    image: P5,
    newPrice: 50.0,
    oldPrice: 75.0
  },
  {
    id: 6,
    name: "Ordinateur",
    category: "ordinateur",
    image: P6,
    newPrice: 80.0,
    oldPrice: 100.0
  },
  {
    id: 7,
    name: "Ordinateur",
    category: "ordinateur",
    image: P7,
    newPrice: 150.0,
    oldPrice: 200.0
  },
  {
    id: 8,
    name: "Ordinateur",
    category: "ordinateur",
    image: P8,
    newPrice: 300.0,
    oldPrice: 400.0
  },
  {
    id: 9,
    name: "Téléphone",
    category: "telephone",
    image: T1,
    newPrice: 250.0,
    oldPrice: 350.0
  },
  {
    id: 10,
    name: "Téléphone",
    category: "telephone",
    image: T2,
    newPrice: 400.0,
    oldPrice: 450.0
  },
  {
    id: 11,
    name: "Téléphone",
    category: "telephone",
    image: T3,
    newPrice: 60.0,
    oldPrice: 70.0
  },
  {
    id: 12,
    name: "Téléphone",
    category: "telephone",
    image: T4,
    newPrice: 20.0,
    oldPrice: 25.0
  },
  {
    id: 13,
    name: "Téléphone",
    category: "telephone",
    image: T5,
    newPrice: 150.0,
    oldPrice: 200.0
  },
  {
    id: 14,
    name: "Téléphone",
    category: "telephone",
    image: T6,
    newPrice: 300.0,
    oldPrice: 350.0
  },
  {
    id: 15,
    name: "Téléphone",
    category: "telephone",
    image: T7,
    newPrice: 50.0,
    oldPrice: 60.0
  },
  {
    id: 16,
    name: "Téléphone",
    category: "telephone",
    image: T8,
    newPrice: 80.0,
    oldPrice: 100.0
  },
  {
    id: 17,
    name: "Téléphone",
    category: "telephone",
    image: T9,
    newPrice: 20.0,
    oldPrice: 30.0
  },
  {
    id: 18,
    name: "Téléphone",
    category: "telephone",
    image: T10,
    newPrice: 50.0,
    oldPrice: 60.0
  },
  {
    id: 19,
    name: "Écouteur",
    category: "ecouteur",
    image: E1,
    newPrice: 100.0,
    oldPrice: 120.0
  },
  {
    id: 20,
    name: "Écouteur",
    category: "ecouteur",
    image: E2,
    newPrice: 70.0,
    oldPrice: 90.0
  },
  {
    id: 21,
    name: "Écouteur",
    category: "ecouteur",
    image: E3,
    newPrice: 2.0,
    oldPrice: 3.0
  },
  {
    id: 22,
    name: "Samsung",
    category: "telephone",
    image: S1,
    newPrice: 10.0,
    oldPrice: 15.0
  },
  {
    id: 23,
    name: "Samsung",
    category: "telephone",
    image: S2,
    newPrice: 120.0,
    oldPrice: 150.0
  },
  {
    id: 24,
    name: "Samsung",
    category: "telephone",
    image: S3,
    newPrice: 100.0,
    oldPrice: 130.0
  },
  {
    id: 25,
    name: "Montre",
    category: "montre",
    image: W1,
    newPrice: 400.0,
    oldPrice: 450.0
  },
  {
    id: 26,
    name: "Montre",
    category: "montre",
    image: W2,
    newPrice: 600.0,
    oldPrice: 700.0
  },
  {
    id: 27,
    name: "Montre",
    category: "montre",
    image: W3,
    newPrice: 80.0,
    oldPrice: 100.0
  },
  {
    id: 28,
    name: "Montre",
    category: "montre",
    image: W4,
    newPrice: 50.0,
    oldPrice: 70.0
  },
  {
    id: 29,
    name: "Montre",
    category: "montre",
    image: W5,
    newPrice: 150.0,
    oldPrice: 180.0
  },
  {
    id: 30,
    name: "Montre",
    category: "montre",
    image: W6,
    newPrice: 30.0,
    oldPrice: 40.0
  },
  {
    id: 31,
    name: "Iphone",
    category: "telephone",
    image: I1,
    newPrice: 500.0,
    oldPrice: 600.0
  },
  {
    id: 32,
    name: "Iphone",
    category: "telephone",
    image: I2,
    newPrice: 90.0,
    oldPrice: 120.0
  },
  {
    id: 33,
    name: "Iphone",
    category: "telephone",
    image: I3,
    newPrice: 100.0,
    oldPrice: 120.0
  },
  {
    id: 34,
    name: "Iphone",
    category: "telephone",
    image: I4,
    newPrice: 600.
  },
  {
    id: 34,
    name: "Iphone",
    category: "telephone",
    image: I4,
    newPrice: 600.0,
    oldPrice: 700.0
  },
  {
    id: 35,
    name: "Iphone",
    category: "telephone",
    image: I5,
    newPrice: 800.0,
    oldPrice: 900.0
  },
  {
    id: 36,
    name: "Iphone",
    category: "telephone",
    image: I6,
    newPrice: 400.0,
    oldPrice: 450.0
  },
  {
    id: 37,
    name: "Tablette",
    category: "tablette",
    image: TB1,
    newPrice: 200.0,
    oldPrice: 250.0
  },
  {
    id: 38,
    name: "Tablette",
    category: "tablette",
    image: TB2,
    newPrice: 200.0,
    oldPrice: 250.0
  },
  {
    id: 39,
    name: "Tablette",
    category: "tablette",
    image: TB3,
    newPrice: 300.0,
    oldPrice: 350.0
  },
  {
    id: 40,
    name: "Tablette",
    category: "tablette",
    image: TB4,
    newPrice: 100.0,
    oldPrice: 150.0
  },
  {
    id: 41,
    name: "Tablette",
    category: "tablette",
    image: TB5,
    newPrice: 50.0,
    oldPrice: 100.0
  },
  {
    id: 42,
    name: "Tablette",
    category: "tablette",
    image: TB6,
    newPrice: 40.0,
    oldPrice: 90.0
  }
];

export default allProduct;
