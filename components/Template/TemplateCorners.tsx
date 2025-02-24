import type { ReactNode } from "react";

interface TemplateCornersProps {
  children: ReactNode;
  cornerColor?: string;
  minHScreen?: boolean;
  showCorners?: boolean;
}

const TemplateCorners: React.FC<TemplateCornersProps> = ({
  children,
  cornerColor = "bg-white",
  minHScreen = true,
  showCorners = true,
}) => {
  return (
    <div
      className={`relative ${
        minHScreen ? "min-h-screen" : "h-fit"
      } flex flex-col p-4`}
    >
      {/* top left corner */}
      {showCorners && (
        <>
          <div
            className={`absolute top-0 left-0 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
          <div
            className={`absolute -top-6 left-6 rotate-90 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
        </>
      )}

      {/* top right corner */}
      {showCorners && (
        <>
          <div
            className={`absolute top-0 right-0 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
          <div
            className={`absolute -top-6 right-6 rotate-90 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
        </>
      )}

      {/* bottom left corner */}
      {showCorners && (
        <>
          <div
            className={`absolute bottom-0 left-0 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
          <div
            className={`absolute -bottom-6 left-6 rotate-90 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
        </>
      )}

      {/* bottom right corner */}
      {showCorners && (
        <>
          <div
            className={`absolute bottom-0 right-0 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
          <div
            className={`absolute -bottom-6 right-6 rotate-90 ${cornerColor} w-[5px] h-[50px]`}
          ></div>
        </>
      )}

      {children}
    </div>
  );
};

export default TemplateCorners;
