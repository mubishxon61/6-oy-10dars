import { BounceLoader } from "react-spinners"


function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
        <BounceLoader color="gray" />
    </div>
  )
}

export default Loading