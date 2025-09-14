document.getElementById('topupForm').addEventListener('submit', function(e){
  e.preventDefault();

  const game = document.getElementById('game').value;
  const userId = document.getElementById('userId').value;
  const amount = document.getElementById('amount').value;
  const payment = document.getElementById('payment').value;

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h3>Pesananmu berhasil!</h3>
    <p>Game: <b>${game}</b></p>
    <p>ID Player: <b>${userId}</b></p>
    <p>Nominal: <b>${amount}</b></p>
    <p>Pembayaran via: <b>${payment}</b></p>
  `;
});