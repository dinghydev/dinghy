import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_FOCUSED_3 = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDiscrete;barPos=100;strokeColor=#0F9D58;opacity=100;strokeWidth=2;fillColor=#0F9D58;handleSize=10;shadow=0;fontSize=12;fontColor=#ffffff;html=1;',
  },
  _original_width: 200,
  _original_height: 45,
}

export function DiscreteSliderFocused3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_SLIDER_FOCUSED_3}
      {...props}
      _style={extendStyle(DISCRETE_SLIDER_FOCUSED_3, props)}
    />
  )
}
