import img from '../assets/unique.png'

const UniqueLight = () => {
  return (
    <section className="unique">
      <div className="container uniqueContainer">
        <div className="uniqueTitle">
          <h2>
            Unique lighting
            <br /> refurbished to light up your life.
          </h2>
        </div>
        <div className="uniqueBottom">
          <div className="uniqueLeft">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
              atque libero sunt labore tenetur praesentium voluptate quasi
              perferendis ratione magni tempora rem quia pariatur sed aut
              suscipit modi, repellendus nulla.praesentium voluptate quasi
              perferendis ratione magni tempora rem quia pariatur sed aut
              suscipit modi, repellendus nulla.praesentium voluptate quasi
              perferendis ratione magni tempora rem quia pariatur sed aut
              suscipit modi, repellendus nulla.
            </p>
            <div className="uniqueLeftBottom">
              <img src={img} alt="" />
              <div className="uniqueText">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime illo, inventore sit amet praesentium quas! Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Maxime illo,
                  inventore sit amet praesentium quas!
                </p>
                <button className="btn">Read More</button>
              </div>
            </div>
          </div>
          {/* right img */}
          <div className="uniqueRightImg">
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default UniqueLight
