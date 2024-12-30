export default function About() {
  return (
    <>
      <div className="about-container flex justify-center mt-14">
        <div className="w-full lg:w-5/12 flex flex-col justify-center mr-7">
          <h1 className="text-3xl font-bold text-black mb-7 hover:text-primary w-fit">About Us</h1>
          <p>
          <b>  Welcome to our business!</b>  <br /> We are committed to providing high-quality
            services that you can rely on. <br />With a focus on professionalism and
            customer satisfaction, we aim to deliver the best experience every
            time. Whether you're looking for expert solutions or personalized
            support, we’re here to help. <br /> We’re located in Bahadurabad, and we’d
            love to have you visit us.
          </p>
        </div>
        <div className="location mt-8 ">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3134.0218032565817!2d67.06466021016816!3d24.88290654426832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33faf17e3e713%3A0xc9e0560b08909aa2!2sSMIT%20Head%20Office%20Bahadurabad!5e1!3m2!1sen!2s!4v1735551384306!5m2!1sen!2s"
            style={{ width: "100%", height: "300px", border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
