<template>
  <nav class="nav container">
    <div class="nav__logo-container">
      <img
        src="../assets/logo.svg"
        alt="earthLogo"
        class="nav__rotating-logo"
      />
    </div>

    <div class="nav__content">
      <router-link class="nav__link" :to="{ name: aboutPage }"
        >About</router-link
      >
      <router-link class="nav__link" :to="{ name: blogPage }">Blog</router-link>
      <router-link class="nav__link" :to="{ name: faqPage }">Faq</router-link>
    </div>

    <button class="button nav__button">Contact</button>
  </nav>
</template>

<script>
export default {};
</script>

<!-- Contains all the styles specific to the nav-bar -->

<style scoped>
.nav {
  margin-top: 1rem;
  height: 15vh;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__rotating-logo {
  animation: rotateLogo 8s infinite alternate-reverse ease-in-out;
}

@keyframes rotateLogo {
  0% {
    rotate: 0deg;
  }

  20% {
    rotate: 90deg;
  }

  40% {
    rotate: 180deg;
  }

  60% {
    rotate: 270deg;
  }

  80% {
    rotate: 360deg;
  }

  100% {
    rotate: 450deg;
  }
}

.nav__content {
  width: min(30%, 25rem);
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.nav__link {
  font-size: 2rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 300ms ease-out;
}

.nav__link:hover {
  transform: translateY(-10%);
  color: #1570ef;
}

.nav__button {
  background: #1570ef;
  margin-right: 1rem;
  transition: all 300ms ease-out;
  box-shadow: 0.5px 0.5px 3px transparent inset;
}

.nav__button:hover {
  transform: scale(1.05);
}
</style>
