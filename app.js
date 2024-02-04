document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");
  let noCount = 0;
  let yesPressed = false;

  const updateView = () => {
    app.innerHTML = '';

    if (yesPressed) {
      const img = createImage("https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif");
      const message = createMessage("TAAAAK!!!");
      app.appendChild(img);
      app.appendChild(message);
    } else {
      const img = createImage("https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif", "h-[200px]");
      const question = createMessage("Czy zostaniesz moją Walentynką 👉👈?", "text-4xl my-4");
      const yesButton = createButton("TAK", "bg-green-500 hover:bg-green-700", handleYesClick, yesButtonSize());
      const noButton = createButton(noCount === 0 ? "No" : getNoButtonText(), "bg-red-500 hover:bg-red-700", handleNoClick);

      app.appendChild(img);
      app.appendChild(question);
      app.appendChild(createDiv([yesButton, noButton]));
    }
  };

  const createImage = (src, className = "") => {
    const img = document.createElement("img");
    img.src = src;
    img.className = className;
    return img;
  };

  const createMessage = (text, className = "") => {
    const message = document.createElement("div");
    message.textContent = text;
    message.className = className;
    return message;
  };

  const createButton = (text, className, clickHandler, style = {}) => {
    const button = document.createElement("button");
    button.textContent = text;
    button.className = className;
    Object.assign(button.style, style);
    button.addEventListener("click", clickHandler);
    return button;
  };

  const createDiv = (children) => {
    const div = document.createElement("div");
    div.classList.add("flex", "items-center", "justify-center");
    children.forEach(child => div.appendChild(child));
    return div;
  };

  const yesButtonSize = () => ({ fontSize: `${noCount * 20 + 16}px` });

  const handleYesClick = () => {
    yesPressed = true;
    updateView();
  };

  const handleNoClick = () => {
    noCount++;
    updateView();
  };

  const getNoButtonText = () => {
    const phrases = [
      "Nie",
      "Na pewno?",
      "Ale naprawdę?",
      "Przemyśl to, proszę!",
      "Ostatnia szansa :c",
      "Na pewno nie?",
      "Nie pożałujesz!",
      "No zastanów się mocniej!",
      "Ale na pewno, na pewno?",
      "To może być twoja ostatnia szansa!",
      "Miej litość!",
      "Nie miej serca z lodu :c",
      "A jednak?",
      "A może jednak?",
      "Czy to Twoja ostateczna odpowiedź?",
      "Łamiesz mi serduszko ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  updateView();
});

