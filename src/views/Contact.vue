<template>
  <section class="c-contact u-section">
    <h2 class="u-section__title u-hide--desktop">Contact</h2>
    <form class="columns" action="https://formspree.io/miibaeza@gmail.com" method="POST">
      <div class="column">
        <div class="form-group">
          <label class="form-label" for="name">Name</label>
          <input type="text" name="name" id="name">
        </div>
        <div class="form-group">
          <label class="form-label" for="subject">Subject</label>
          <input type="text" name="_subject" id="subject">
        </div>
        <div class="form-group">
          <label class="form-label" for="email">Email</label>
          <input type="email" name="email" id="email">
        </div>
      </div>
      <div class="column is-two-thirds">
        <div class="form-group">
          <label class="form-label" for="message">Yes, tell me</label>
          <textarea class="c-contact__message" name="message" id="message"></textarea>
        </div>
        <div class="form-group">
          <button class="c-contact__btn u-btn" type="submit">Send</button>
        </div>
      </div>
    </form>
  </section>
</template>
