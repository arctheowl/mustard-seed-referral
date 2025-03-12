
const SubmittedPage = () => {
  return (
    <div className="text-center bg-slate-200 text-black h-screen flex flex-col justify-center items-center">
      <div className="text-4xl">Thank You!</div>
      <div className="text-2xl">Your form has been successfully submitted.</div>
      <div className="text-2xl">We aim to provide an email confirmation by the end of the day.</div>
      <div className="text-2xl">Final place allocations will take 2 weeks</div>
      <div className="text-2xl">Visit us at <a href="https://mustardseedautism.co.uk/" target="_blank" className="text-blue-500">MustardSeedAutism</a></div>
    </div>
  );
};

export default SubmittedPage;