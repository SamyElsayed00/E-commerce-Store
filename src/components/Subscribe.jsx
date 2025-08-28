const Subscribe = () => {
  return (
    <div className="container flex-col mb-10 mt-16">
      <div className="text-center w-full flex flex-col items-center">
        <h1 className="text-4xl font-medium text-title dark:text-white mb-2">
          Subscribe now & get 20% off
        </h1>
        <p className="text-subtitle dark:text-gray-300 mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <form className="flex items-center justify-between max-w-2xl w-full md:h-14 h-12">
          <input
            className="border border-gray-500/30 dark:border-gray-500/50 bg-white dark:bg-gray-900 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-700 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email id"
          />
          <button className="md:px-12 px-8 h-full text-white bg-primary rounded-md rounded-l-none">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
