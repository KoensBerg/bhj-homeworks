// — — — — — — — — — — — — — — — — — —
// Задача 2 – Дерево интересов
// — — — — — — — — — — — — — — — — — —

const checkboxes = document.querySelectorAll('.interest__check');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', () => {
    const checkboxParent = checkboxes[i].closest('.interest');
    const checkboxChildren = Array.from(checkboxParent.querySelectorAll('.interest__check'));
    
    if (checkboxes[i].checked) checkboxChildren.forEach(e => e.checked = true);
    else checkboxChildren.forEach(e => e.checked = false);
  });
}