// src/data/products.js
// Products of the shop, written by hand (no backend).
// The ids are strings because useParams() always returns strings.

const products = [
  {
    id: '1',
    name: 'RAM DDR5 32GB (2x16GB) 6000MHz',
    price: 110,
    description: 'Dual-channel DDR5 memory kit for gaming and multitasking.',
  },
  {
    id: '2',
    name: 'SSD NVMe M.2 1TB',
    price: 75,
    description: 'PCIe 4.0 solid state drive with read speeds up to 7000 MB/s.',
  },
  {
    id: '3',
    name: 'Graphics Card RTX 4060 8GB',
    price: 320,
    description: 'Mid-range graphics card for 1080p gaming with ray tracing.',
  },
  {
    id: '4',
    name: 'Processor Ryzen 5 7600',
    price: 190,
    description: '6-core, 12-thread AM5 processor up to 5.1 GHz.',
  },
];

export default products;
