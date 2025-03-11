const Resources = () => {
  return (
    <div className="flex flex-col items-center text-black pt-10 w-96">
      <h1 className="underline text-3xl">Resources</h1>
      <a
        href="https://mustardseedautism.co.uk/branches/"
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        <h2 className="text-lg font-semibold">Branches</h2>
      </a>
      <a
        href="https://mustardseedautism.co.uk/resources/"
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        <h2 className="text-lg font-semibold">At Home Resources</h2>
      </a>
    </div>
  );
};

export default Resources;
