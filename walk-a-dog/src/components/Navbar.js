import React from "react";
import arrow from "../assets/arrow.png";
import burger from "../assets/burger.png";

function toggleBurger() {
  const burgerIcon = document.querySelector("#burger");
  const navbarMenu = document.querySelector("#nav-links");

  burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle("is-active");
  });
}

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"
      />
      <div>
        <nav class="navbar has-background-light">
          <div class="navbar-brand">
            <a class="navbar-item">
              <img src={arrow} width="40" height="40" />
            </a>
            <a class="navbar-burger" id="burger" onClick={toggleBurger}>
            <img src={burger} width="50" height="50" />
            </a>
          </div>
          <div class="navbar-menu" id="nav-links">
            <div class="navbar-start has-text-centered">
            <a class="navbar-item has-text-info has-text-left">
                Menu główne właściciela...
              </a>
              <a class="navbar-item " href="/Home">
                Zarezerwuj spacer
              </a>

              <a class="navbar-item" href="/Create">
                Twój profil
              </a>

              <a class="navbar-item" href="/Popular">
                Twoje psy
              </a>

              <a class="navbar-item" href="/About">
                Kalendarz rezerwacji
              </a>
              <a class="navbar-item" href="/About">
                Trenerzy
              </a>
              <a class="navbar-item" href="/About">
                Historia spacerów
              </a>
              
            </div>
            <a class="navbar-item has-text-centered" href="/About">
                Wyloguj się
              </a>
          </div>
        </nav>
      </div>
      <section class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Walk-a-dog</strong> by{" "}
              Drop Database.
          </p>
        </div>
      </section>
    </div>
  );
}
export default App;
