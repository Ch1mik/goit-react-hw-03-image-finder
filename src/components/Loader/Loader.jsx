import React from "react";
import { MutatingDots } from "react-loader-spinner";
import s from "./Loader.module.css"

const SpinnerLoader = () => (
    <div className={s.loader}>
        <MutatingDots 
  height="100"
  width="100"
  color="#3f51b5"
  secondaryColor= '#3f51b5'
  radius='12.5'
  ariaLabel="mutating-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
 />
    </div>
    
)
export default SpinnerLoader