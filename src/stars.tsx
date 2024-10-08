import Image from "next/image";

interface StarProps {
    color: string;
    time: string;
    size: number;
    style: string;
  }
  
  const timeVariants: { [index:string] : string} = {
    one: 'animate-[twinkle_1s_ease-in-out_infinite_alternate]',
    two: 'animate-[twinkle_2s_ease-in-out_infinite_alternate]',
    three: 'animate-[twinkle_3s_ease-in-out_infinite_alternate]',
    four: 'animate-[twinkle_4s_ease-in-out_infinite_alternate]'
  }
  
export function DoubleStar({color, time, size, style}: StarProps) {  
    return(
      <>
        <Image className={`${timeVariants[time]} ${style}`} src={"/double_star_" + color + ".png"} alt="Two stars pulsing" width={size} height={size}/>
      </>
    );
  }
  
export function SingleStar({color, time, size, style}: StarProps) {
    return(
      <>
        <Image className={`${timeVariants[time]} ${style}`} src={"/single_star_" + color + ".png"} alt="Two stars pulsing" width={size} height={size}/>
      </>
    );
  }