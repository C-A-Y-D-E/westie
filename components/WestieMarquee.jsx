import Marquee from "react-fast-marquee";

const WestieMarquee = () => {
  return (
    <>
      <section className="mt-[-1%] w-full bg-[#FBFBFB] relative z-10">
        <Marquee>
          <div className="w-full flex items-center py-6 border-y-2 border-y-black">
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default WestieMarquee;

const Text = () => {
  return (
    <h1 className="font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mx-6">
      $WESTIE
    </h1>
  );
};
