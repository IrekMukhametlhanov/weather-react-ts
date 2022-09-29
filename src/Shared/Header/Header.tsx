import React from "react";
import s from './Header.module.scss';
import Select from "react-select";
import {Globalsvgselector} from '../../assets/images/icons/shared/globalsvgselector';
interface Props{}

export const Header = (props:Props)=> {
    const options = [
        { value: 'city_1', label: 'Санкт_Петербург' },
        { value: 'city_2', label: 'Москва' },
        { value: 'city_3', label: 'Казань' }
      ];
      const colourStyles = {
        control: (styles: any) =>({
            ...styles,
            backgroundColor: 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
      };
      
    return <header className={s.Header}>
        <div className={s.wrapper}>
            <div className={s.logo}><Globalsvgselector id='logo'/></div>
            <div className={s.title}>React weather</div>
        </div>
        <div className={s.wrapper}>
            <div className={s.change_theme}><Globalsvgselector id='change_theme'/>
            </div>
            <Select 
            defaultValue={options[0]}
            styles={colourStyles} 
            options={options} />
        </div>
    </header>;
};
  
  export default Header;