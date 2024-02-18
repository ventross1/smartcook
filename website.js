
/*
    const difficulty = document.getElementById('difficulty');
    const alergens = document.getElementById('alergens');
    const type = document.getElementById('type');
    const category = document.getElementById('category');
    const items = document.querySelectorAll('.grid');
  
    // Get selected options from both dropdowns
    const selectedOptions1 = Array.from(difficulty.selectedOptions).map(option => option.value);
    const selectedOptions2 = Array.from(alergens.selectedOptions).map(option => option.value);
    const selectedOptions3 = Array.from(type.selectedOptions).map(option => option.value);
    const selectedOptions4 = Array.from(category.selectedOptions).map(option => option.value);
  
    // Combine selected options from both dropdowns
    const selectedFilters = [...selectedOptions1, ...selectedOptions2, ...selectedOptions3, ...selectedOptions4];
  
    // Filter items based on selected filters
    items.forEach(item => {
      const itemFilters = item.getAttribute('data-filters').split(' ');
      const shouldShow = selectedFilters.some(filter => itemFilters.includes(filter));
      item.style.display = shouldShow ? 'block' : 'none';
    });
  }
  
  // Attach event listeners to dropdowns
  document.getElementById('difficulty').addEventListener('change', filterItems);
  document.getElementById('alergens').addEventListener('change', filterItems);
  document.getElementById('type').addEventListener('change', filterItems);
  document.getElementById('category').addEventListener('change', filterItems);
*/
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.filter-checkbox');
  
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', () => {
        const selectedFilters = Array.from(checkboxes)
                                   .filter(chk => chk.checked)
                                   .map(chk => chk.value);
        
        const items = document.querySelectorAll('.item');
  
        items.forEach(item => {
          const itemOptions = item.dataset.options.split(' ');
          if (selectedFilters.every(filter => itemOptions.includes(filter))) {
            item.style.display = 'grid';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });