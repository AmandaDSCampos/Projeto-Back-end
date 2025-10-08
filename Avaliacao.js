document.querySelector('.avaliacao-form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  const nome = document.querySelector('.nome-professor').innerText;
  const comentario = document.getElementById('comentario').value;
  const estrelas = document.querySelector('input[name="estrela"]:checked')?.value || 0;
  
  if (!estrelas) {
    alert("Por favor, selecione uma nota de 1 a 5 estrelas.");
    return;
  }
  
  alert(`✅ Avaliação enviada!\n\nProfessor: ${nome}\nNota: ${estrelas} estrelas\nComentário: ${comentario}`);
  
  e.target.reset();
});
