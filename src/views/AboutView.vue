<template>
  <body>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css">
  <section id="contact-form" class="py-3">
    <div class="container">
      <h1 class="l-heading"><span class="text-primary">Contact</span> Us</h1>
      <p>Please fill out the form below to contact us</p>
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" name="name" id="name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email">
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea name="message" id="message"></textarea>
        </div>
        <button type="submit" class="btn">Submit</button>
      </form>
    </div>
  </section>

  <section id="contact-info" class="bg-dark">
    <div class="container">
      <div class="box">
        <i class="fa-solid fa-hotel fa-3x"></i>
        <h3>Location</h3>
        <p>50 Main St, Boston MA</p>
      </div>
      <div class="box">
        <i class="fa-solid fa-phone fa-3x"></i>
        <h3>Phone Number</h3>
        <p>(617) 555-5555</p>
      </div>
      <div class="box">
        <i class="fa-solid fa-envelope fa-3x"></i>
        <h3>Email Address</h3>
        <p>frontdesk@hotelbt.co
        </p>
      </div>
    </div>
  </section>
  <footer id="main-footer">
    <p>Hotel BT &copy; 2022, All Rights Reserved</p>
  </footer>
  </body>
</template>

<style>
#contact-form .form-group {
  margin-bottom: 20px;
}

#contact-form label {
  display: block;
  margin-bottom: 5px;
}

#contact-form input,
#contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 1px #ddd solid;
}

#contact-form textarea {
  height: 200px;
}

#contact-form input:focus,
#contact-form textarea:focus {
  outline: none;
  border-color: #0d6efd;
}
</style>
