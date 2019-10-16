import React from 'react';
import SingleColorPicker, {baseColor} from './SingleColorPicker'; 
import {reduxState} from '../index'

interface IProps {
    stateCounter:number;
  };
  interface IState { };

export default class RGBColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props:any) {
      super(props);
    }


    render(){
        let colorSample: string = `rgb(${reduxState().RGBColorPicker.rValue},${reduxState().RGBColorPicker.gValue},${reduxState().RGBColorPicker.bValue})`
        const rgbStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: colorSample
        }
        
      return <div>
        <SingleColorPicker color={baseColor.r} intensity={reduxState().RGBColorPicker.rValue} />
        <SingleColorPicker color={baseColor.g} intensity={reduxState().RGBColorPicker.gValue} />
        <SingleColorPicker color={baseColor.b} intensity={reduxState().RGBColorPicker.bValue} />
        <div style={rgbStyle}></div>mixed color
      </div>
    }
  }
  