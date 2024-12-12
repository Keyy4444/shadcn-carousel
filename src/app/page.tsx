import StoryBook from "@/components/StoryBook/StoryBook";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="container 2xl:max-w-[1864px] flex min-h-screen flex-col items-center my-24 mx-auto">
        <StoryBook />
      </div>
    </div>
  );
}
