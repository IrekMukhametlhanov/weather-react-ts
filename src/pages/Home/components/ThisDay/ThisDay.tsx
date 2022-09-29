import React from "react";
import Select from "react-select";
import { Globalsvgselector } from "../../../../assets/images/icons/shared/globalsvgselector";
import s from './ThisDay.module.scss';

interface Props{}

export const ThisDay = (props:Props)=> {
    return <header className={s.ThisDay}>
        <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
            <div className={s.this_temp}>20*</div>
            <div className={s.this_day_name}>Tuday</div>
       </div>
      <Globalsvgselector id='sun'/>
        </div>

        <div className={s.bottom_block}>
            <div className={s.this_time}>
                Time <span>21:54</span>
            </div>
            <div className={s.this_city}>
                City <span>Санкт_Петербург</span>
            </div>


        </div>



    </header>;
};