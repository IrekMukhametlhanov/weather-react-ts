import React from "react";
import s from './Days.module.scss';
import { Globalsvgselector } from "../../../assets/images/icons/shared/globalsvgselector";
import {Day}  from './Days';
 
interface Props{
    day:Day
}

export const Cards = ({day}:Props)=> {
    return <div className={s.Cards}>
        <div className={s.card}>
      <div className={s.day}>{day.day}</div>
      <div className={s.day__info}>{day.day_info}</div>
      <div className={s.img}>
        <Globalsvgselector id={day.icon_id} />
      </div>
      <div className={s.temp__day}>{day.temp_day}</div>
      <div className={s.temp__night}>{day.temp_day}</div>
      <div className={s.info}>{day.info}</div>
    </div>      
    </div>;
};