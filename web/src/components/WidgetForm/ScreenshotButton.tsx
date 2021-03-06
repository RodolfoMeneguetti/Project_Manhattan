import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { useState } from "react";
import { Loading } from "./Loading";
import { backgroundPosition } from "html2canvas/dist/types/css/property-descriptors/background-position";
import { backgroundSize } from "html2canvas/dist/types/css/property-descriptors/background-size";


interface ScreenshotButtonProps {
  screenshot: String | null;
  onScreenshotTook: (screenshot: String | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {

  const [isTakingScreenshot, setIsTalkingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTalkingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64Image = canvas.toDataURL('image/png');

    onScreenshotTook(base64Image);
    setIsTalkingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{
          backgroundImage: `url(${screenshot})`,
          /* Foi realizado um zoom na foto */
          backgroundPosition: 'right bottom',
          backgroundSize: 100
        }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (

    <button
      type="button"
      onClick={handleTakeScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors "
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-4 h-6" />}
    </button>

  )
}
