import React from "react";
import s from './ThisDayInfo.module.scss';
import Select from 'react-select';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from "./ThisDayItem";

interface Props { }
export interface item {
    icon_id: string;
    name: string;
    value: string;
}

export const ThisDayInfo = (props: Props) => {
    const items = [{
        icon_id: 'temp',
        name: 'температура',
        value: '20 - ощущаеться как 17',
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: '765 мм ртутного столба',
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: 'Без осадков',
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value: '3 м/с юго-запад - легкий ветер',
    }]
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_info_items}>
                 {items.map((item:item) =>(
                    <ThisDayItem key={item.icon_id} item={item}/>
                 ))}
        </div>
        <img className={s.cloud_img} src={cloud} alt="облако"/>
    </div>
  );
};