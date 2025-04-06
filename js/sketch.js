const content = document.getElementById('content');
const search = document.getElementById('search');
const originalContent = content.textContent;

search.addEventListener('input', () => {
	content.innerHTML = FuzzyHighlight.highlight(originalContent, search.value);
});
