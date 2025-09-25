body {
  font-family: 'Press Start 2P', monospace;
  background: linear-gradient(to bottom, #d0f0ff, #f0eaff);
  color: #333;
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 28px;
  color: #0077cc;
  margin-bottom: 10px;
}

input, select, button {
  font-family: inherit;
  font-size: 16px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  border: 2px solid #0077cc;
  background-color: #fff;
}

button:hover {
  background-color: #cceeff;
  cursor: pointer;
}

#accueil, #quiz, #resultat {
  margin-top: 30px;
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes flash {
  0% { color: #0077cc; }
  50% { color: #ffcc00; }
  100% { color: #0077cc; }
}



