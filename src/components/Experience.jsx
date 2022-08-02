import images from '../assets';


const Experience = () => {

  return (
    <section className='my-12 lg:mb-24'>

      <div className='container mx-auto'>

        <div className='min-h-[700px] lg:min-h-[500px] flex flex-col lg:flex-row lg:space-x-20'>

          {/* 🟨🟨🟨 images 🟨🟨🟨 */}
          <div className='flex-1 flex items-center space-x-6 lg:space-x-12'>
            <div
              className='self-start'
              data-aos='fade-down'
              data-aos-offset='300'
            >
              <img src={images.expImg1} alt="" />
            </div>

            <div
              className='self-end'
              data-aos='fade-up'
            >
              <img src={images.expImg2} alt="" />
            </div>
          </div>


          {/* 🟨🟨🟨 text 🟨🟨🟨 */}
          <div className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
            data-aos='fade-left'
            data-aos-offset='400'
          >
            <h2 className='text-3xl font-bold mb-6'>New Experience In Playing Games</h2>

            <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi ullam dolorum inventore mollitia culpa, nemo illo earum incidunt dolor quae.</p>

            <button className='btn'>Get it now</button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Experience;
