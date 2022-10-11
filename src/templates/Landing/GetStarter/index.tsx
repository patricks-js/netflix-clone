import { CaretRight } from "phosphor-react";

export const GetStarter = () => {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-lg font-medium">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <form className="flex items-center justify-center">
        <label
          htmlFor="getStarted"
          className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="getStarted"
          className="py-3 px-5 text-gray-700 font-medium w-96"
          placeholder="exemple@example.com"
          required
        />
        <button
          className="flex items-center gap-1 bg-red-700 text-medium py-3 font-bold px-5 rounded-none"
          type="submit">
          Get Started{" "}
          <CaretRight
            size={20}
            weight="bold"
            color="#f5f5f5"
          />
        </button>
      </form>
    </div>
  );
};
