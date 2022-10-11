import { FAQ } from "../../components/FAQ";
import { LandingMovies } from "../../utils/lading-movies";
import { LandingFAQ } from "../../utils/landing-faq";
import { GetStarter } from "./GetStarter";
import { Section } from "./Section";

export const Landing = () => {
  return (
    <main className="w-full h-full">
      <section
        id="section-hero"
        className="h-screen bg-hero-image bg-no-repeat bg-cover flex items-center justify-center">
        <div className="w-[950px] h-screen px-10 flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="font-black text-6xl">
            Unlimited movies, TV shows and more.
          </h1>
          <h3 className="text-2xl font-bold">
            Watch anywhere. Cancel anytime.
          </h3>
          <GetStarter />
        </div>
      </section>
      {LandingMovies.map(movies => (
        <Section
          data={movies}
          key={movies.id}
        />
      ))}
      <section
        id="FAQ"
        className="bg-black py-20">
        <div className="w-full h-full flex flex-col items-center space-y-10">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <div className="max-w-4xl flex flex-col space-y-2">
            {LandingFAQ.map(question => (
              <FAQ
                key={question.id}
                data={question}
              />
            ))}
          </div>
          <GetStarter />
        </div>
      </section>
    </main>
  );
};
