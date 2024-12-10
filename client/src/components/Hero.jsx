const Hero = () => {
  return (
    <section className="bg-base-100">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl flex flex-col">
            Create Forms in Seconds
            <strong className="font-black sm:block ">Not in Hours</strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="w-full md:max-w-[200px] btn btn-primary font-bold px-12 py-3 rounded-md ">
              Create Form
            </button>

            <button className="w-full md:max-w-[200px]  btn btn-outline btn-primary font-bold px-12 py-3 rounded-md ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
