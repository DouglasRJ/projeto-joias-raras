import Banner from '../components/Banner';

export default function Home() {
  return (
    <div className="h-screen ">
      <Banner />
      <div>
        <div className="max-h-96 bg-[url('/chaminé.jpg')] pb-96 px-12 py-[15%] bg-cover text-white ">
          <div className="text-4xl h-full bg-cover ">
            Chaminé da Antiga Olaria
          </div>
          <div className="w-48 text-xs text-justify backdrop-blur-md bg-white/10 p-2 rounded-md mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque
            dolorum sint illum aut inventore corporis perferendis, maxime,
            labore nemo nulla accusantium aliquam, assumenda magni veniam
            pariatur dolore optio natus!
          </div>
        </div>
      </div>
    </div>
  );
}
