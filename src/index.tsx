import * as React from 'react';
import {createPortal} from 'react-dom'

interface Props {
    element: HTMLDivElement;
}

export default class Tooltip extends React.Component<Props> {
    el;
    tooltipPortal;

    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.state = {
            elementRef: props.elementRef
        }
    }

    componentDidMount() {
        this.getPortal().appendChild(this.el);
    }

    componentWillUnmount() {
        this.getPortal().removeChild(this.el);
    }

    getPortal = () => {
        return document.getElementById('tooltip-portal');
    }

    renderTooltip = () => {
        const rect = this.props.element?.getBoundingClientRect();
console.log(this.props, this.props.element?.getBoundingClientRect());
        if (rect) {
            const position = {
                top: rect.bottom + 10,
                left: rect.right + 10
            };

            return (
                (
                    <div style={{position: 'absolute', top: `${position.top}px`, left: `${position.left}px`, width: '100px', height: '100px', backgroundColor: 'white'}}>
                        {this.props.children}
                    </div>
                )
            )
        } else {
            return null;
        }
    }

    render() {
        return createPortal(
            this.renderTooltip(),
            this.el
        )
    }
}