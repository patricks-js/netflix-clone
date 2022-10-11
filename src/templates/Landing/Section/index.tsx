import classNames from "classnames";

type SectionTypes = {
  title: string;
  subtitle: string;
  image: string;
  reverse: boolean;
};

type DataSectionTypes = {
  data: SectionTypes;
};

export const Section = ({ data }: DataSectionTypes) => {
  return (
    <section className="w-full bg-black py-20">
      <div
        className={classNames("max-w-screen-lg mx-auto flex items-center", {
          "flex-row-reverse": data.reverse
        })}>
        <img
          src={data.image}
          alt=""
          className="flex-1"
        />
        <div className="flex-1 flex flex-col gap-5 ml-20">
          <h2 className="font-bold text-4xl">{data.title}</h2>
          <p className="text-xl">{data.subtitle}</p>
        </div>
      </div>
    </section>
  );
};
