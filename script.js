document.querySelector(".btn.btn-primary").addEventListener("click", function () {
    const query = document.querySelector("input[type='text']").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      const title = card.querySelector(".card-title").textContent.toLowerCase();
      if (title.includes(query)) {
        card.parentElement.style.display = "block";
      } else {
        card.parentElement.style.display = "none";
      }
    });
  });

  function validateForm() {
    const inputs = document.querySelectorAll("form input[required]");
    for (let input of inputs) {
      if (!input.value) {
        alert("Please fill all required fields.");
        input.focus();
        return false;
      }
    }
    return true;
  }



  const topBtn = document.getElementById("topBtn");
  window.onscroll = function () {
    topBtn.style.display = document.documentElement.scrollTop > 300 ? "block" : "none";
  };
  function topFunction() {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });


  const toggleBtn = document.getElementById('toggleDarkMode');

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Change button text/icon
    if (document.body.classList.contains('dark-mode')) {
      toggleBtn.innerHTML = '☀️ Light Mode';
    } else {
      toggleBtn.innerHTML = '🌙 Dark Mode';
    }
  });


  