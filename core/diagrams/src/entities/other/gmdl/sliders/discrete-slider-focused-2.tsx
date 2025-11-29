import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_FOCUSED_2 = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDiscrete;barPos=60;strokeColor=#0F9D58;opacity=100;strokeWidth=2;fillColor=#0F9D58;handleSize=10;shadow=0;fontSize=12;fontColor=#ffffff;html=1;',
  },
  _width: 200,
  _height: 45,
}

export function DiscreteSliderFocused2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DISCRETE_SLIDER_FOCUSED_2)} />
  )
}
