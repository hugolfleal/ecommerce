export type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  tag?: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Vaso Orgânico N.º 02',
    category: 'Decoração',
    price: 89.9,
    description: 'Design fluido, feito em PLA de origem renovável.',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=900&q=85',
    tag: 'Mais vendido',
  },
  {
    id: 2,
    name: 'Luminária Arco',
    category: 'Casa & decoração',
    price: 219.9,
    description: 'Luz suave e formas que transformam o ambiente.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    name: 'Suporte Modular',
    category: 'Organização',
    price: 59.9,
    description: 'Uma solução modular para organizar sua mesa.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85',
    tag: 'Novo',
  },
  {
    id: 4,
    name: 'Kit Mini Planters',
    category: 'Decoração',
    price: 74.9,
    description: 'Três peças compactas para suas pequenas plantas.',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85',
  },
];
