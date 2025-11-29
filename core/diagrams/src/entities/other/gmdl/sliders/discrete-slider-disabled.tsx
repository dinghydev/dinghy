import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISCRETE_SLIDER_DISABLED = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDisabled2;strokeColor=#b0b0b0;strokeWidth=2;fillColor=#b0b0b0;handleSize=6;shadow=0;hPos=0;html=1;',
  },
  _width: 200,
  _height: 20,
}

export function DiscreteSliderDisabled(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, DISCRETE_SLIDER_DISABLED)} />
  )
}
