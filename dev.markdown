---
layout: narrow
---


<div class="form section">
  <h2>Dev</h2>
  <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/mjvlevvg"
  method="post">
    <fieldset id="fs-frm-inputs">
      <label for="handle">Name/Handle</label>
      <input type="text" name="name" id="handle" placeholder="Handle" required="">
      <label for="email-address">Email Address</label>
      <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com (so that we can contact about shipping samples)" required>
      <label for="project-name">Your Project Name</label>
      <input type="text" name="project-name" id="project-name" placeholder="Project Name" required="">
      <label for="programing-language">Programing Languages</label>
      <input type="text" name="programing-language" id="programing-language" placeholder="Java, Python, JS, etc..." required="">
      <label for="project-language">Project Languages</label>
      <input type="text" name="project-language" id="project-language" placeholder="English, Spanish, French, etc..." required="">
      <label for="country">Country Location</label>
      <input type="text" name="country" id="country" placeholder="ie. Brazil" required="">
      <label for="nfc">Have you worked with NFC before?</label>
      <select name="nfc" id="nfc" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <label for="message">In order to be considered, please describe your project/integration below</label>
      <textarea rows="3" name="message" id="message"
        placeholder="Any other comments?"
        required=""></textarea>
      <input type="hidden" name="_subject" id="email-subject" value="Survey Responses">
    </fieldset>
    <input type="submit" value="Reguest Samples">
  </form>
</div>

<a href="/sdk">Developer Documentation and SDK</a>
