
const name = [
  'Afrikaans',
  'English',
  'isiNdebele (Ndebele)',
  'isiXhosa (Xhosa)',
  'isiZulu (Zulu)',
  'Sepedi (Northern Sotho)',
  'Sesotho (Southern Sotho)',
  'Setswana (Tswana)',
  'siSwati (Swati/Swazi)',
  'Tshivenda (Venda)',
  'Xitsonga (Tsonga/Shangaan/Vatsonga)',
  'Khoisan (Xi)',
  'Sign Language',
  'Other Languages'
];

const id = [
  'AfrikaansLanguage',
  'EnglishLanguage',
  'NdebeleLanguage',
  'XhosaLanguage',
  'ZuluLanguage',
  'SepediLanguage',
  'SothoLanguage',
  'TswanaLanguage',
  'SwatiLanguage',
  'VendaLanguage',
  'TsongaLanguage',
  'KhoisanLanguage',
  'SignLanguage',
  'OtherLanguages'
];

const languages = [];
const showBtn = [];

// Create language objects and generate button HTML
for (let i = 0; i < name.length; i++) {
  const languageObj = { id: id[i], name: name[i] };
  languages.push(languageObj);

  // Store button HTML
  showBtn.push(
    `<button id="${languageObj.id}" class="language-btn">${languageObj.name}</button>`
  );
}

// Render buttons
const buttonContainer = document.getElementById('buttonContainer');
buttonContainer.innerHTML = showBtn.join('');

// Add click event listeners to each button
languages.forEach(language => {
  const button = document.getElementById(language.id);
  button.addEventListener('click', () => {
    console.log(`Clicked: ${language.name} (${language.id})`);
    resetButtonColors(); // Reset all button colors
    button.style.backgroundColor = '#0623a5'; // Change clicked button color to little blue
  });
});

// Reset all button colors to default
function resetButtonColors() {
  Array.from(document.querySelectorAll('.language-btn')).forEach(btn => {
    btn.style.backgroundColor = ''; // Reset to default background
  });
}

// Search logic with error handling
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  let visibleCount = 0;

  languages.forEach(language => {
    const button = document.getElementById(language.id);
    const isVisible = language.name.toLowerCase().includes(query);
    button.classList.toggle('hidden', !isVisible); // Toggle visibility
    if (isVisible) visibleCount++; // Track visible buttons
  });

  // Handle error: No matching buttons
  if (visibleCount === 0) {
    console.log('No matching languages found.');
  }
});

document.querySelector('.dropdown-btn').addEventListener('click', () => {
  const menu = document.querySelector('.dropdown-menu');
  menu.style.display = menu.style.display === 'none' || !menu.style.display ? 'block' : 'none';
});