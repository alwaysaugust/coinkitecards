---
layout: narrow
---

<div class="form section">
  <h2>Partners</h2>
  <form id="fs-frm" name="survey-form" accept-charset="utf-8" action="https://formspree.io/f/xbjwpaoj"
    method="post">
    <fieldset id="fs-frm-inputs">
      <label for="name">Name</label>
      <input type="text" name="name" id="name" placeholder="Name" required="">
      <label for="company">Company</label>
      <input type="text" name="company" id="company" placeholder="Company" required="">
      <label for="email-address">Email Address</label>
      <input type="email" name="_replyto" id="email-address" placeholder="email@domain.com (so that we can contact about shipping samples)" required>
      <label for="telephone">Telephone Number (Optional)</label>
      <input type="telephone" name="telephone" id="telephone" placeholder="(555) 555-5555">      
      <label for="project-name">Your Project Name</label>
      <input type="text" name="project-name" id="project-name" placeholder="Project Name" required="">
      <label for="country">Country</label>
      <input type="text" name="country" id="country" placeholder="ie. Brazil" required="">
      <label for="card">Which card are you interested on?</label>
      <select name="card" id="card" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="satscard">SATSCARD</option>
        <option value="tapsigner">TAPSIGNER</option>
        <option value="both">Both</option>
      </select>
      <label for="qty">How many Cards are you looking to acquire?</label>
      <select name="qty" id="qty" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="less-than-1000">less than 1000</option>
        <option value="less-than-2500">less than 2500</option>
        <option value="more-than-500">more than 10000</option>
      </select>
      <label for="context">In what context are you looking to utilize the Cards?</label>
      <select name="context" id="context" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="merchants-location">At your merchant's location</option>
        <option value="local-events">At local events</option>
        <option value="personal-use">For personal use</option>
        <option value="resale">For resale</option>
      </select>
      <label for="customize">Are you interested in customizing your Card design?</label>
      <select name="customize" id="customize" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="no-sure">Not sure</option>
      </select>
      <label for="whitelabel">Are you interested in our White-label services the Card?</label>
      <select name="whitelabel" id="whitelabel" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="yes">Yes</option>
        <option value="no">No</option>
        <option value="no-sure">Not sure</option>
      </select>
      <label for="referal">How did you hear about us?</label>
      <select name="referal" id="referal" required="">
        <option value="" selected="" disabled="">Select</option>
        <option value="yes">Long time customer</option>
        <option value="no">Media appearances</option>
        <option value="no-sure">Other, please specify:</option>
      </select>
      <input type="text" name="ref-other" id="ref-other" placeholder="Other, please specify" required="">
      <label for="interests">Partnership Interests</label>
      <label>        
        <input type="checkbox" name="interests" value="wholesaler">Wholesaler
      </label>
      <label>
        <input type="checkbox" name="interests" value="whitelabel">Whitelabel     
      </label>
      <label>
        <input type="checkbox" name="interests" value="branded-card">Branded Card For Re-Sale
      </label>
      <label>
        <input type="checkbox" name="interests" value="branded-card">Branded Card For Promotion
      </label>
      <label>
        <input type="checkbox" name="interests" value="whitelabel">Whitelabel
      </label>
      <label>
        <input type="checkbox" name="interests" value="branded-card">Branded Card
      </label>
      <label>
        <input type="checkbox" name="interests" value="art-supplier">Art Supplier
      </label>
      <br />      
      <label for="message">Additional Comments</label>
      <textarea rows="3" name="message" id="message"
        placeholder="Any other comments?"
        required=""></textarea>
      <input type="hidden" name="_subject" id="email-subject" value="Card Partnership Contact">
    </fieldset>
    <input type="submit" value="Send Contact Request">
  </form>
</div>
