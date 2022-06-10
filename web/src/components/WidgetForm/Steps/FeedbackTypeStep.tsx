import { feedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: feedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <button className="top-5 right-2 absolute w-4 h-4">
          <CloseButton />
        </button>
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key} className="bg-zinc-800 rounded-lg py-7 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"

              onClick={() => onFeedbackTypeChanged(key as feedbackType)}
              type="button">
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}