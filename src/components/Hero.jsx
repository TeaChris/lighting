import img from '../assets/saturn.png'

const Hero = () => {
  return (
    <section>
      <div className="container heroContainer">
        {/* left */}
        <div className="heroDetails">
          <h2>
            Long lasting and
            <br /> always brights
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Iste ad assumenda molestias ipsam ab repellendus.
          </p>
          <button className="btn">Contact us</button>
        </div>
        {/* right */}
        <div className="heroImage">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}
export default Hero
