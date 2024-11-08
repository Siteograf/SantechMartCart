function toggleContent() {

    const checkboxes = document.querySelectorAll('.toggleCheckbox');
    const contentBlock = document.getElementById('contentBlock');
    const contentTotal = document.getElementById('contentTotal');
    const anyChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    contentBlock.style.display = anyChecked ? 'none' : 'block';
    contentTotal.style.display = anyChecked ? 'block' : 'none';
  }