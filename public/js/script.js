function fecharModalDelete() {
  document.querySelector(".modal-overlay").style.display = "none";
}

function abrirModal() {
  document.querySelector(".modal-overlay").style.display = "block";
}

async function deletePaleta(id) {
    const response = await fetch(`https://oportunidade.imoveisveracruz.com.br/delete/${id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    });
  
    const result = await response.json();
  
    localStorage.setItem("message", result.message);
    localStorage.setItem("type", "success");
  
    location.reload();
  }