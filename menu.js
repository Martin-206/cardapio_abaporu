
const menuData = {
  "CAFÉ": { items: [
    { nome: "Café Expresso", preco: "R$8" },
    { nome: "Café Cortado", preco: "R$8" },
    { nome: "Longo", preco: "R$10" },
    { nome: "Café com Leite", preco: "R$10" },
    { nome: "Capuccino", preco: "R$14" },
    { nome: "Carajillo", preco: "R$14" },
    { nome: "Mocaccino", preco: "R$14" },
    { nome: "Chococcino", preco: "R$14" },
    { nome: "Fatia de Bolo", preco: "R$20" }
  ], background: 'img/cafe.png' },
  "CERVEJA": { items: [
    { nome: "Lata - Brahma / Skol / Opa", preco: "R$8" },
    { nome: "Lata - Bohemia / Original / Amstel", preco: "R$9" },
    { nome: "Lata - Budweiser / Spaten", preco: "R$9" },
    { nome: "Lata - Patagonia", preco: "R$15" },
    { nome: "Long Neck - Opa Pilsen", preco: "R$12" },
    { nome: "Long Neck - Stella / Budweiser / Eisenbahn", preco: "R$14" },
    { nome: "Long Neck - Corona / Heineken", preco: "R$14" },
    { nome: "Garrafa 600 ml - Opa Pilsen", preco: "R$16" },
    { nome: "Garrafa 600 ml - Opa Lager Premium", preco: "R$18" },
    { nome: "Artesanal - Pilsen AL 'Fero'", preco: "R$12" },
    { nome: "Artesanal - IPA AL 'Fero'", preco: "R$15" }
  ], background: 'img/cerveja.png' },
  "DRINKS": { items: [
    { nome: "Caipirinha", preco: "R$20" },
    { nome: "Caipirinha Vodka", preco: "R$25" },
    { nome: "Fernet com Coca", preco: "R$25" },
    { nome: "Daikiri", preco: "R$29" },
    { nome: "Cuba Libre", preco: "R$29" },
    { nome: "Gin Tônica", preco: "R$29" },
    { nome: "Piña Colada", preco: "R$29" },
    { nome: "Campari Tônica", preco: "R$29" },
    { nome: "Campari com Laranja", preco: "R$29" }
  ], background: 'img/drinks.png' },
  "BEBIDAS SEM ÁLCOOL": { items: [
    { nome: "Água / Água com Gás", preco: "R$5" },
    { nome: "Refri Lata", preco: "R$8" },
    { nome: "Red Bull", preco: "R$14" },
    { nome: "Monster", preco: "R$14" },
    { nome: "Sucos Naturais 330ml", preco: "R$14" },
    { nome: "Licuados 330ml", preco: "R$18" }
  ], background: 'img/semalcool.png' },
  "PIZZAS ": { items: [
    { nome: " ", preco: "Grande / Média / Mini"},
    { nome: "Mussarella", preco: "R$64 / R$36 / R$24" },
    { nome: "Presunto", preco: "R$74 / R$42 / R$29" },
    { nome: "Marguerita", preco: "R$74 / R$42 / R$29" },
    { nome: "Napolitana", preco: "R$74 / R$42 / R$29" },
    { nome: "Pepperoni", preco: "R$74 / R$42 / R$29" },
    { nome: "Portuguesa", preco: "R$74 / R$42 / R$29" },
    { nome: "Gorgonzola", preco: "R$79 / R$45 / R$34" },
    { nome: "Presunto de Parma", preco: "R$89 / R$48 / R$39" }
  ], background: 'img/pizzas.png' },
  "EMPANADAS / SALGADO": { items: [
    { nome: "Empanada Carne Suave / Picante", preco: "R$12" },
    { nome: "Empanada Presunto e Queijo", preco: "R$12" },
    { nome: "Empanada Frango / Frango e Requeijao", preco: "R$12" },
    { nome: "Empanada Capresse / Cebola e Queijo / Brócolis", preco: "R$12" },
    { nome: "Empanada Costela", preco: "R$14" },
    { nome: "Coxinhas Frango / Catupiri", preco: "R$12" },
    { nome: "Kibe Carne / Catupiri", preco: "R$12" }
  ], background: 'img/salgado.png' },
  "SANDWICH": { items: [
    { nome: "Simples (Presunto / Queijo)", preco: "R$20" },
    { nome: "Completo (Presunto / Queijo / Tomate / Alface)", preco: "R$25" },
    { nome: "SUPER P (Presunto, Queijo, Tomate, Alface)", preco: "R$25" },
    { nome: "SUPER S (Salame Milano, Queijo, Tomate, Alface)", preco: "R$25" },
    { nome: "Croissant (Presunto / Queijo)", preco: "R$25"},
    { nome: "Croissant Compl (Parma / Queijo / Tomate /Rúcula)", preco: "R$35"}
  ], background: 'img/sandwich.png' },
  "DOCES": { items: [
    { nome: "Bolo do doce", preco: "R$20" },
    { nome: "Medialuna", preco: "R$8" },
    { nome: "Alfajor", preco: "R$10" },
  
  ], background: 'img/doces.png' },
  "VEGETARIANO": { items: [
    { nome: "Queijo, Tomate, Alface, Ovo de Codorna", preco: "R$25" },
    { nome: "Queijo, Rúcula, Tomate Cereja", preco: "R$25" }
  ], background: 'img/vegano.png' },
};


const menuContainer = document.getElementById('menu');
for (const [section, data] of Object.entries(menuData)) {
  const sectionDiv = document.createElement('div');
  sectionDiv.className = 'section';
  // Establece la imagen de fondo
  sectionDiv.style.backgroundImage = `url(${data.background})`;
  sectionDiv.style.backgroundSize = 'auto 80%'; // Ajusta la imagen al 80% de la altura de la sección
  sectionDiv.style.backgroundPosition = 'center'; // Centra la imagen
  sectionDiv.style.backgroundRepeat = 'no-repeat'; // Asegura que la imagen no se repita

  // Agrega una capa de color con transparencia sobre la imagen
  sectionDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; // Color blanco con 50% de transparencia
  sectionDiv.style.backgroundBlendMode = 'overlay'; // Mezcla la imagen de fondo con el color

  const heading = document.createElement('h2');
  heading.textContent = section;
  sectionDiv.appendChild(heading);

  data.items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    const itemName = document.createElement('span');
    itemName.textContent = item.nome;
    const itemPrice = document.createElement('span');
    itemPrice.textContent = item.preco;
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);
    sectionDiv.appendChild(itemDiv);
  });

  menuContainer.appendChild(sectionDiv);
}
