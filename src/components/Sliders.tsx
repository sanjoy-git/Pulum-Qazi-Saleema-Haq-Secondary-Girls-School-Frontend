import autoPlay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselSlides,
} from "keep-react";


interface IHomeSliderProps {
  sliders: string[];
}

export function HomeSlider({ sliders }: IHomeSliderProps) {
  return (
    <div>
      <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
        <CarouselSlides>
          {sliders.map((slideImageUrl: string, index: number) => (
            <CarouselItem key={index}>
              <div className=" relative overflow-hidden">
                <img
                  className=" w-full rounded-md object-cover aspect-[2/1] md:aspect-[3/1] opacity-80"
                  // src={`https://lh3.google.com/u/0/d/${slideDriveId}`}
                  src={slideImageUrl}
                  loading="lazy"
                  alt="Home slider images"
                />
                <div className="absolute top-1 left-1 right-0 sm: z-10 flex justify-center items-center w-full h-full">
                  <div className=" text-teal-700 text-center rounded-md p-2 sm:p-5">
                    {/* <h2 className=" font-bold text-xl sm:text-2xl">
                      {slide?.title}
                    </h2>
                    <p className=" font-semibold text-sm mt-2 sm:text-xl">
                      {slide?.subTitle} <Button>More..</Button>
                    </p> */}

                    <span className=" custom-color p-3 rounded-md text-slate-50">
                      Next
                      {" "}
                      <CarouselNextButton />
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        <CarouselControl>
          {/* <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons> */}
          <CarouselIndicators />
        </CarouselControl>
      </Carousel>
    </div>
  );
}



interface IFooterSliderProps {
  sliders: {
    photoUrl: string;
    name: string;
    designation: string;
    quote: string;
  }[];
}

export function FooterSlider({ sliders }: IFooterSliderProps) {
  return (
    <div className=' my-1'>
      <Carousel options={{ loop: true }} plugins={[autoPlay()]}>
        <CarouselSlides>
          {sliders?.map((slide, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.50]"
            >
              <div className="py-5 px-1 h-full bg-slate-400 rounded-md text-center">
                <img
                  src={slide?.photoUrl}
                  className=" object-cover rounded-full h-16 w-16 mx-auto"
                  alt=""
                />
                <h3 className=" py-1 font-bold">{slide?.name}</h3>
                <h4 className=" py-1">{slide?.designation}</h4>
                <p className=" py-1">{slide?.quote}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselSlides>
        {/* <CarouselControl>
					<CarouselButtons>
						<CarouselPrevButton />
						<CarouselNextButton />
					</CarouselButtons>
					<CarouselIndicators />
				</CarouselControl> */}
      </Carousel>
    </div>
  );
}



interface ITextSliderProps {
  topNotice: {
    noticeTitle: string;
    timestamp: string;
    noticePdfFile: string;
  };
}

export function TextSlider({ topNotice }: ITextSliderProps) {
  return (
    <div>
      <a href={topNotice?.noticePdfFile} target="_blank" className="flex gap-2 overflow-x-auto text-xl text-teal-500 text-nowrap top-notice-scroll">
         <span>{topNotice?.timestamp}</span>
         <span>{topNotice?.noticeTitle}</span>
        
      </a>
    </div>
  );
}
