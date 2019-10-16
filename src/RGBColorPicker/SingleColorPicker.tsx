import React from 'react';
import { dispatch, ActionType, IAction } from '../index'

export enum baseColor {
    r = "red",
    g = "green",
    b = "blue"
}

export interface IIntensityAction extends IAction {
    color: baseColor,
    intensity: number
}

interface IProps {
    color: baseColor;
    intensity: number;
};

interface IState { };

export default class SingleColorPicker extends React.PureComponent<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.intensityChange = this.intensityChange.bind(this);
    }

    render() {
        const scpStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: this.props.color
        }
        let colorSample: string = "";
        switch (this.props.color) {
            case baseColor.r:
                colorSample = `rgb(${this.props.intensity},0,0)`;
                break;
            case baseColor.g:
                colorSample = `rgb(0,${this.props.intensity},0)`;
                break;
            case baseColor.b:
                colorSample = `rgb(0,0,${this.props.intensity})`;
                break;
        }
        const sampleStyle = {
            display: "inline-block",
            width: "20px",
            height: "20px",
            backgroundColor: colorSample
        }
        return <div>
            <div style={scpStyle}></div><div style={sampleStyle}></div><input type="number" value={this.props.intensity} onChange={this.intensityChange} />
            I'm a ColorPicker for {this.props.color}
        </div>
    }

    intensityChange(event: any) {
        const inputElement = event.target as HTMLInputElement;
        const intensityAction: IIntensityAction = {
            type: ActionType.update_color_intensity,
            color: this.props.color,
            intensity: parseInt(inputElement.value)
        }

        dispatch(intensityAction);
    }
}