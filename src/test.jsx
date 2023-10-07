import { useMemo, useState } from "react";
import Countdown from "react-countdown";

function Competition({onCompleteTimeFun}){
    return(
        <div onClick={onCompleteTimeFun}>reset</div>
    )
}




export function Count(){
    const [k, setK] = useState(false);
    const onCompleteTimeFun = () => {
      console.log("Resetting Time");
      setK((i) => !i);
    };
    const timerRenderer = ({ seconds, completed, }) => {
        if (completed) {
          return (
            <Competition onCompleteTimeFun={onCompleteTimeFun}  />
          )
        }
        return (
          <span>
            {seconds}
          </span>
        );
    };
    const time = useMemo(() => {
      return Date.now() + 4 * 1000
    }, [k])
    console.log(time)
    return(
        <Countdown
        key={k}
        date={time}
        // onComplete={onCompleteTimeFun}
        renderer={timerRenderer}
        // onComplete={onCompleteTimeFun}
      />
    )
}
