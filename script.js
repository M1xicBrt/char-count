const textInput = document.getElementById("text-input");
const countChar = document.getElementById("count-chars");
const countWord = document.getElementById("count-words");

textInput.addEventListener("input", () => {
  const text = textInput.value;
  countChar.textContent = text.length;

  const words = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0);
  countWord.textContent = words.length;
});
