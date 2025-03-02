export default function Dots({ direction }: { direction: string }) {
  if (direction === "top-right") {
    return (
      <div className="absolute top-0 right-[3.5rem] w-[5px] h-[25vh] hidden md:flex md:flex-col justify-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (direction === "top-left") {
    return (
      <div className="absolute top-0 left-[3.5rem] w-[5px] h-[25vh] hidden md:flex md:flex-col justify-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
        </div>
      </div>
    );
  }

  if (direction === "bottom-right") {
    return (
      <div className="hidden absolute bottom-0 right-[3.5rem] w-[5px] h-[25vh] md:flex md:flex-col justify-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
        </div>
      </div>
    );
  }


  if (direction === 'bottom-left') {
    return (
        <div className="hidden absolute bottom-0 left-[3.5rem] w-[5px] h-[25vh] md:flex md:flex-col justify-center gap-2">
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
            <div className="rounded-full w-[10px] h-[10px] bg-yellow-200"></div>
          </div>
        </div>
      </div>
    )
  }
}
