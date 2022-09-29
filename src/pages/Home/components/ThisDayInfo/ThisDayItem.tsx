import React from "react";
import { item } from "./ThisDayInfo";
import s from './ThisDayInfo.module.scss';
import { IndicatorSvgSelector } from '../../../../assets/images/icons/shared/indicator/IndicatorSvgSelector';

export interface Props {
    item: item;
}
export const ThisDayItem = ({ item }: Props) => {
    const{icon_id, name, value}= item
return(
    <div className={s.item}> 
    <div className={s.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
    </div>
    <div className={s.indicator_name}>{name}</div>
    <div className={s.indicator_value}>{value}</div>


    </div>
);
};