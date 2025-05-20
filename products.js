const products = [
  { name: 'Phone', category: 'electronics', price: 300 },
  { name: 'Laptop', category: 'electronics', price: 800 },
  { name: 'Book A', category: 'books', price: 20 },
  { name: 'Book B', category: 'books', price: 15 }
];

const filter = document.getElementById('filter');
const sort = document.getElementById('sort');
const list = document.getElementById('product-list');

function displayProducts(items) {
  list.innerHTML = '';
  items.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product-card';
    div.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: $${p.price}</p>`;
    list.appendChild(div);
  });
}

function applyFilters() {
  let filtered = [...products];

  if (filter.value !== 'all') {
    filtered = filtered.filter(p => p.category === filter.value);
  }

  if (sort.value === 'low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort.value === 'high') {
    filtered.sort((a, b) => b.price - a.price);
  }

  displayProducts(filtered);
}

filter.onchange = applyFilters;
sort.onchange = applyFilters;

applyFilters();
