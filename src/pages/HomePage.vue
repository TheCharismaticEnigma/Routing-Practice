<template>
  <section class="home-section container">
    <div class="home__logo-container">
      <img src="../assets/logo.svg" alt="" class="home__logo" />
    </div>

    <div class="home__content">
      <h1 class="home__heading">
        Revolutionize your business with Our <span>Innovative Solutions</span>
      </h1>

      <p class="home__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, soluta.
        Nihil possimus est deserunt, aliquid nisi sint labore corporis veniam
        culpa illum facilis cupiditate perferendis.
      </p>
    </div>

    <div class="home__input-group">
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Write your email"
        spellcheck="false"
        autocomplete="off"
        class="home__input"
      />

      <button class="button">Get Started</button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.home-section {
  height: 80vh;
  padding-top: 4.5rem;
  margin-top: 4.5rem;
  border-bottom: 1px solid #ececec;
  background-image: url('../assets/backgroundImage.jpg');
  background-position: 50% 50%;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.home__logo {
  height: 8rem;
  width: 8rem;
}

.home__content {
  width: 90%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
}

.home__heading {
  text-transform: capitalize;
  font-size: 5rem;
  font-family: cursive;
  text-align: center;
}

.home__heading span {
  color: #1570ef;
  font-style: italic;
}

.home__text {
  width: 80%;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.7);
  text-align: center;
}

.home__input-group {
  display: none;
}
</style>
