import Link from "next/link";
import { ComponentProps } from "@uniformdev/canvas-react";
import Splitter from "./Splitter";


export const Hero: React.FC<any> = ({ component }) => {
  const csentry = component?.parameters?.csentry?.value; 
  let title = component?.parameters?.title?.value;
  let text = component?.parameters?.text?.value;
  let buttonText = component?.parameters?.buttonText?.value;
  let buttonLink = component?.parameters?.buttonLink?.value;
  let image = component?.parameters?.image?.value;
  let eventName = component?.parameters?.eventname?.value || 'buttonClick' 
  

  const shareEvent = () => {
    window.gtag?.('event', eventName);
  };

  if (csentry) {
    title = csentry.title;
    text = csentry.description;
    buttonText = csentry.button_text;
    buttonLink = csentry.button_link_slug;
    image = csentry.image?.url;

  }


  return (
    <>
      <div className="pt-24">
        <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left min-h-500">
            <p className="uppercase tracking-loose w-full">
              This is Uniform demo
            </p>
            <h1
              className="my-4 text-5xl font-bold leading-tight"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p
              className="leading-normal text-2xl mb-8"
              dangerouslySetInnerHTML={{ __html: text }}
            />

            {buttonText ? (
              <Link prefetch={false} href={buttonLink ? buttonLink : "#"}>
                <button onClick={shareEvent} className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">
                  {buttonText}
                </button>
              </Link>
            ) : null}
          </div>
          <div className="w-full md:w-3/5 py-6 text-center">
            {image && (
              <img
                className="w-full md:w-4/5 z-50 min-h-500 max-h-500"
                height={500}
                src={image}
                alt={buttonText}
              />
            )}
          </div>
        </div>
      </div>
      <Splitter />
    </>
  );
}
