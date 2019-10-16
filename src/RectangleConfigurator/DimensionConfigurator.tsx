import React from 'react';
import {dispatch,ActionType, IAction} from '../index'

export enum Dimension {
    h = "height",
    w = "width"
}
export interface IDimensionAction extends IAction {
    dimension:Dimension;
    value:number
} 

interface IProps{
    dimension:Dimension;
    value:number;
};

interface IState{ };

export default class DimensionConfigurator extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.callvalueChangeOfParentComponent = this.callvalueChangeOfParentComponent.bind(this);   
      }
      
    callvalueChangeOfParentComponent(event:any){
            const inputElement = event.target as HTMLInputElement;
            const dimensionAction:IDimensionAction = {
                type: ActionType.update_dimension,
                dimension:this.props.dimension,
                value:parseFloat(inputElement.value)
            }
        dispatch(dimensionAction);    
    } 
    render() {
        let testString: string = "";
        let showStyle: number = 0;
        switch (this.props.dimension) {
            case Dimension.w:
                testString = `width value`;
                showStyle = this.props.value;
                break;
            case Dimension.h:
                testString = `height value`;
                showStyle = this.props.value;
                break;
        }

        const rectangleStyle = {
            display: "inline-block",
            width: `${showStyle}px`,
            height: "20px",
            border: "1px solid black",
            backgroundColor: "blue",
            margin: "0 5px"
        }
        return (
            <div>
                <label>Here you can insert {testString} </label>
                <input type="number" value={this.props.value} onChange={this.callvalueChangeOfParentComponent}/>
                <div style={rectangleStyle}></div>
            </div>
        )
    }
    
}

