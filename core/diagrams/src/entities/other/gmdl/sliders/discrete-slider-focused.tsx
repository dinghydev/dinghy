import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_FOCUSED = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDiscrete;barPos=1;strokeColor=#BEBEBE;opacity=100;strokeWidth=2;fillColor=#BEBEBE;handleSize=10;shadow=0;fontSize=12;fontColor=#ffffff;html=1;',
  },
  _width: 200,
  _height: 45,
}

export function DiscreteSliderFocused(props: NodeProps) {
  return (
    <Shape
      {...DISCRETE_SLIDER_FOCUSED}
      {...props}
      _style={extendStyle(DISCRETE_SLIDER_FOCUSED, props)}
    />
  )
}
