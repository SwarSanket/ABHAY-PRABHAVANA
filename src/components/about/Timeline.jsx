export default function Timeline() {
  const timelineItems = [
    {
      title: (
        <>
          <span className="font-bold">
            Nurturing spiritual and ethical advancement
          </span>
          , as well as academic excellence.
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-bold">
            Establishing educational institutions
          </span>{" "}
          as well as providing support to various centres of knowledge.
        </>
      ),
    },
    {
      title: (
        <>
          <span className="font-bold">Providing medical relief</span> to the
          poor and disabled, disease prevention and general public utility.
        </>
      ),
    },
    {
      title: (
        <>
          Promoting studies in{" "}
          <span className="font-bold">
            Indian culture, history, philosophy, ancient languages
          </span>{" "}
          as well as training in{" "}
          <span className="font-bold">meditation and yogic practices</span>.
        </>
      ),
    },
    {
      title: (
        <>
          Appreciating and{" "}
          <span className="font-bold">
            rewarding achievements in fields of arts, sciences, and humanitarian
            work
          </span>
          .
        </>
      ),
    },
  ];

  return (
    <div className="container px-4 mx-auto">
      <h1 className="mb-4 font-bold text-fipch-heading text-fipch-orange">
        THE TRUST FOCUSES ON
      </h1>
      <ol className="relative border-l border-gray-200 list-none">
        {timelineItems.map((item, index) => (
          <li key={index} className="mb-8 ml-4 flex items-start">
            <div className="w-2.5 h-2.5 bg-gray-400 rounded-full mt-2.5 mr-2.5"></div>{" "}
            {/* Light grey bullet mark */}
            <h3 className="text-lg text-fipch-grey">{item.title}</h3>
          </li>
        ))}
      </ol>
    </div>
  );
}
