
const menuData = {
  "CAFÉ": [
    { nome: "Café Expresso", preco: "R$ 8" },
    { nome: "Café Cortado", preco: "R$ 8" },
    { nome: "Longo", preco: "R$ 10" },
    { nome: "Café com Leite", preco: "R$ 10" },
    { nome: "Capuccino", preco: "R$ 14" },
    { nome: "Carajillo", preco: "R$ 14" },
    { nome: "Mocaccino", preco: "R$ 14" },
    { nome: "Chococcino", preco: "R$ 14" },
    { nome: "Fatia de Bolo", preco: "R$ 20" }
  ],
  "CERVEJA": [
    { nome: "Lata - Brahma / Skol / Opa", preco: "R$ 8" },
    { nome: "Lata - Bohemia / Original / Amstel", preco: "R$ 9" },
    { nome: "Lata - Budweiser / Spaten", preco: "R$ 9" },
    { nome: "Lata - Patagonia", preco: "R$ 15" },
    { nome: "Long Neck - Opa Pilsen", preco: "R$ 12" },
    { nome: "Long Neck - Stella / Budweiser / Eisenbahn", preco: "R$ 14" },
    { nome: "Long Neck - Corona / Heineken", preco: "R$ 14" },
    { nome: "Garrafa 600 ml - Opa Pilsen", preco: "R$ 16" },
    { nome: "Garrafa 600 ml - Opa Lager Premium", preco: "R$ 18" },
    { nome: "Artesanal - Pilsen AL 'Fero'", preco: "R$ 12" },
    { nome: "Artesanal - IPA AL 'Fero'", preco: "R$ 15" }
  ],
  "DRINKS": [
    { nome: "Caipirinha", preco: "R$ 20" },
    { nome: "Caipirinha Vodka", preco: "R$ 25" },
    { nome: "Fernet com Coca", preco: "R$ 25" },
    { nome: "Daikiri", preco: "R$ 29" },
    { nome: "Cuba Libre", preco: "R$ 29" },
    { nome: "Gin Tônica", preco: "R$ 29" },
    { nome: "Piña Colada", preco: "R$ 29" },
    { nome: "Campari Tônica", preco: "R$ 29" },
    { nome: "Campari com Laranja", preco: "R$ 29" }
  ],
  "BEBIDAS SEM ÁLCOOL": [
    { nome: "Água / Água com Gás", preco: "R$ 5" },
    { nome: "Refri Lata", preco: "R$ 8" },
    { nome: "Red Bull", preco: "R$ 14" },
    { nome: "Monster", preco: "R$ 14" },
    { nome: "Sucos Naturais 330ml", preco: "R$ 14" },
    { nome: "Licuados 330ml", preco: "R$ 18" }
  ],
  "PIZZAS (8 Fatias / Média / Mini)": [
    { nome: "Mussarella", preco: "R$ 64 / R$ 36 / R$ 24" },
    { nome: "Presunto", preco: "R$ 74 / R$ 42 / R$ 29" },
    { nome: "Marguerita", preco: "R$ 74 / R$ 42 / R$ 29" },
    { nome: "Napolitana", preco: "R$ 74 / R$ 42 / R$ 29" },
    { nome: "Pepperoni", preco: "R$ 74 / R$ 42 / R$ 29" },
    { nome: "Portuguesa", preco: "R$ 74 / R$ 42 / R$ 29" },
    { nome: "Gorgonzola", preco: "R$ 79 / R$ 45 / R$ 34" },
    { nome: "Presunto de Parma", preco: "R$ 89 / R$ 48 / R$ 39" }
  ],
  "EMPANADAS / SALGADO": [
    { nome: "Empanada Carne Picante", preco: "R$ 12" },
    { nome: "Empanada Presunto e Queijo", preco: "R$ 12" },
    { nome: "Empanada Capresse / Cebola e Queijo / Brócolis", preco: "R$ 12" },
    { nome: "Empanada Costela", preco: "R$ 14" },
    { nome: "Coxinhas Frango / Catupiri", preco: "R$ 12" },
    { nome: "Kibe Carne / Catupiri", preco: "R$ 12" }
  ],
  "MISTO QUENTE 15x15": [
    { nome: "Simples (Presunto / Queijo)", preco: "R$ 20" },
    { nome: "Completo (Presunto / Queijo / Tomate / Alface)", preco: "R$ 25" }
  ],
  "SANDUÍCHE SUPER": [
    { nome: "Presunto, Queijo, Tomate, Alface", preco: "R$ 25" },
    { nome: "Salame Milano, Queijo, Tomate, Alface", preco: "R$ 25" }
  ],
  "VEGETARIANO": [
    { nome: "Queijo, Tomate, Alface, Abacate, Ovo de Codorna", preco: "R$ 27" },
    { nome: "Presunto Parma, Queijo, Rúcula, Tomate Cereja", preco: "R$ 34" }
  ]
};

const menuContainer = document.getElementById('menu');

for (const [section, items] of Object.entries(menuData)) {
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'section';
  const heading = document.createElement('h2');
  heading.textContent = section;
  sectionDiv.appendChild(heading);

  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.innerHTML = `<span>${item.nome}</span><span>${item.preco}</span>`;
    sectionDiv.appendChild(itemDiv);
  });

  menuContainer.appendChild(sectionDiv);
}
