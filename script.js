document.getElementById("quantity-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const quantity = document.getElementById("quantity").value;

  if (quantity < 1 || quantity > 500) {
    alert("Por favor, escolha entre 1 e 500 números.");
    return;
  }

  const uniqueLink = `https://rifa2.vercel.app/?n=${quantity}`;
  document.getElementById("link-output").innerHTML = `
    <p>Compartilhe este link com o comprador:</p>
    <a href="${uniqueLink}" target="_blank">${uniqueLink}</a>
  `;
});
