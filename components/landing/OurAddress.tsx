import React from "react";

const mapURL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31149.615698551654!2d37.43513236689505!3d12.60188351130028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x16432903deb758ed%3A0x69a1df405bb22ef2!2sAutomotive%20service!5e0!3m2!1sen!2set!4v1749694924268!5m2!1sen!2set";

function OurAddress() {
  return (
    <div>
      <iframe
        src={mapURL}
        allowFullScreen
        height="400"
        width="100%"
        loading="lazy"
        referrerPolicy="no-referrer"
        title="Gondar Car Rental"
      ></iframe>
    </div>
  );
}

export default OurAddress;
