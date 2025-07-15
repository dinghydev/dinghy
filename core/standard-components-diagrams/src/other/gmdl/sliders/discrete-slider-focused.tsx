import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISCRETE_SLIDER_FOCUSED = {
  _style:
    'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDiscrete;barPos=1;strokeColor=#BEBEBE;opacity=100;strokeWidth=2;fillColor=#BEBEBE;handleSize=10;shadow=0;fontSize=12;fontColor=#ffffff;html=1;',
  _width: 200,
  _height: 45,
}

export function DiscreteSliderFocused(props: DiagramNodeProps) {
  return <Shape {...DISCRETE_SLIDER_FOCUSED} {...props} />
}
