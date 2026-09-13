import Hero from "../../assets/banner-stack.png";

function Banner() {
  return (
    <section className="mx-auto py-7 lg:py-0 sm:py-8">
      <div className="grid items-center gap-12 text-center lg:grid-cols-2 lg:text-left">
        {/* banner Content */}
        <div className="flex flex-col items-center font-inter lg:items-start">
          <h1 className="text-3xl lg:text-6xl font-inter font-bold lg:font-extrabold text-[#0F172A] ">
            Build Your Ideal<br />
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-3 lg:mt-6 text-base font-inter leading-relaxed lg:pr-59 text-[#475569]">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-6 lg:mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#"
              className="btn rounded-lg bg-linear-to-r from-[#F97316] to-[#EC4899] px-6 text-white"
            >
              Explore Technologies
            </a>

            <a
              href="#"
              className="btn rounded-lg border-[#E5E7EB] px-6 text-[#374151] hover:bg-gray-50"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={Hero}
            alt="Developer stack"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
