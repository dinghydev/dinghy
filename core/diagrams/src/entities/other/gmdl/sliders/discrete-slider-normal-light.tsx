import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_NORMAL_LIGHT = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=0;opacity=100;strokeWidth=2;fillColor=#000000;handleSize=10;shadow=0;html=1;',
  },
  _width: 200,
  _height: 10,
}

export function DiscreteSliderNormalLight(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, DISCRETE_SLIDER_NORMAL_LIGHT)}
    />
  )
}
