const BackgroundShapes = () => {
  return (
    <>
      {/* Green shape */}
      <div className='bg-mint-green absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 motion-safe:animate-wiggle' />
      {/* Pink shape */}
      <div className='bg-light-pink absolute top-[-1rem] left-[35rem] w-[50rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] -z-10 motion-safe:animate-sideToSide' />
    </>
  );
};

export default BackgroundShapes;
