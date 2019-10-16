import React from 'react'
import DimensionConfigurator, {Dimension} from './DimensionConfigurator'
import {reduxState} from '../index'

interface IProps{
    stateCounter:number;
};
interface IState{};

export default class RectangleConfigurator extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        }
      
    render() {
        const rectangleStyle = {
            display: "inline-block",
            width: `${reduxState().RectangleConfigurator.width}px`,
            height: `${reduxState().RectangleConfigurator.height}px`,
            border: "1px solid black",
            backgroundColor: "red",
            margin: "10px"
        }
        return (
            <div>
                <h2>Hello I'm a rectangle configurator</h2>
                <DimensionConfigurator dimension={Dimension.w} value={reduxState().RectangleConfigurator.width}/>
                <DimensionConfigurator dimension={Dimension.h} value={reduxState().RectangleConfigurator.height}/>
                <div style={rectangleStyle}></div>
            </div>
        )
    }
}
