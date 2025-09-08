import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_NORMAL_LIGHT = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=0;opacity=100;strokeWidth=2;fillColor=#000000;handleSize=10;shadow=0;html=1;',
  },
  _original_width: 200,
  _original_height: 10,
}

export function DiscreteSliderNormalLight(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISCRETE_SLIDER_NORMAL_LIGHT}
      {...props}
      _style={extendStyle(DISCRETE_SLIDER_NORMAL_LIGHT, props)}
    />
  )
}
