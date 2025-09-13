import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_NORMAL_2 = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=100;strokeColor=#0F9D58;opacity=100;strokeWidth=2;fillColor=#0F9D58;handleSize=10;shadow=0;html=1;',
  },
  _width: 200,
  _height: 10,
}

export function DiscreteSliderNormal2(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_SLIDER_NORMAL_2}
      {...props}
      _style={extendStyle(DISCRETE_SLIDER_NORMAL_2, props)}
    />
  )
}
