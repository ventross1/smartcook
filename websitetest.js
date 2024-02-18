function filterItems() {
    const dropdown1 = document.getElementById('dropdown1');
    const dropdown2 = document.getElementById('dropdown2');
    const items = document.querySelectorAll('.item');
  
    // Get selected options from both dropdowns
    const selectedOptions1 = Array.from(dropdown1.selectedOptions).map(option => option.value);
    const selectedOptions2 = Array.from(dropdown2.selectedOptions).map(option => option.value);
  
    // Combine selected options from both dropdowns
    const selectedFilters = [...selectedOptions1, ...selectedOptions2];
  
    // Filter items based on selected filters
    items.forEach(item => {
      const itemFilters = item.getAttribute('data-filters').split(' ');
      const shouldShow = selectedFilters.some(filter => itemFilters.includes(filter));
      item.style.display = shouldShow ? 'block' : 'none';
    });
  }
  
  // Attach event listeners to dropdowns
  document.getElementById('dropdown1').addEventListener('change', filterItems);
  document.getElementById('dropdown2').addEventListener('change', filterItems);