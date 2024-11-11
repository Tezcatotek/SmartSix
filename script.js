document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById("loader");
  const sidebar = document.querySelector(".sidebar");
  const sidebarToggle = document.querySelector(".sidebar-toggle");

  setTimeout(() => {
    loader.style.display = "none";
  }, 3000);

  window.toggleSidebar = function () {
    if (sidebar.style.left === "0px") {
      sidebar.style.left = "-220px";
      sidebarToggle.style.left = "-30px";
    } else {
      sidebar.style.left = "0";
      sidebarToggle.style.left = "200px";
      
      window.scrollTo({
        top: 0,
        behavior: "smooth" 
      });
    }
  };

  window.showSection = function (sectionId) {
    document.querySelectorAll(".section").forEach(section => section.classList.add("hidden"));
    document.getElementById(sectionId).classList.remove("hidden");

    sidebar.style.left = "-220px";
    sidebarToggle.style.left = "-30px";

    // Desplaza automáticamente hacia la parte superior si la sección es "inicio"
    if (sectionId === "inicio") {
      document.getElementById("inicio").scrollIntoView({
        behavior: "smooth",
        block: "start"  // Asegura que la sección de inicio se muestre desde la parte superior
      });
    }
  };
});
  
window.toggleWaterSensor = function() {
  const status = document.getElementById("water-sensor-status");
  status.textContent = status.textContent === "ON" ? "OFF" : "ON";
};

window.togglePHSensor = function() {
  const status = document.getElementById("ph-sensor-status");
  status.textContent = status.textContent === "ON" ? "OFF" : "ON";
};

window.togglePump = function() {
  alert("Bomba encendida/apagada");
};

// Función de simulación de niveles en tiempo real
function updateWaterLevel(level) {
  const waterFill = document.getElementById("water-fill");
  waterFill.style.height = `${level}%`;
  document.getElementById("water-level-percentage").textContent = `${level}%`;
  document.getElementById("water-level-volume").textContent = `${Math.round(level * 11)} L`;
}

function updatePHLevel(level) {
  const phFill = document.getElementById("ph-fill");
  phFill.style.height = `${level * 10}%`;
  document.getElementById("ph-level-value").textContent = `${level}`;
}

function simulateRealTimeLevels() {
  setInterval(() => {
    // Simula un nivel de agua entre 50% y 100%
    const waterLevel = Math.floor(Math.random() * 51) + 50;
    updateWaterLevel(waterLevel);

    // Simula un nivel de pH entre 6.5 y 8.5
    const phLevel = (Math.random() * 2 + 6.5).toFixed(1);
    updatePHLevel(phLevel);
  }, 3000); // Actualiza cada 3 segundos
}

// Inicia la simulación
simulateRealTimeLevels();

// Funciones del modal
window.openModal = function() {
  document.getElementById("modal").style.display = "flex";
};

window.closeModal = function() {
  document.getElementById("modal").style.display = "none";
};

window.saveLevels = function() {
  const minLevel = document.getElementById("min-level").value;
  const maxLevel = document.getElementById("max-level").value;

  if (minLevel && maxLevel) {
    alert(`Niveles guardados:\nNivel Mínimo: ${minLevel}%\nNivel Máximo: ${maxLevel}%`);
    closeModal();
  } else {
    alert("Por favor, ingrese ambos niveles.");
  }
};

  function sendChat() {
    const input = document.getElementById("chat-input");
    const message = input.value;
    if (message.trim()) {
      const chatMessages = document.getElementById("chat-messages");
      const newMessage = document.createElement("div");
      newMessage.textContent = `You: ${message}`;
      chatMessages.appendChild(newMessage);
      input.value = "";
    }
  }
  
  document.getElementById("chat-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      sendChat();
    }
  });  