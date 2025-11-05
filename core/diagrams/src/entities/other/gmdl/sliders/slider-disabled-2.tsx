import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SLIDER_DISABLED_2 = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDisabled2;strokeColor=#b0b0b0;strokeWidth=2;fillColor=#b0b0b0;handleSize=6;shadow=0;hPos=50;html=1;',
  },
  _width: 210,
  _height: 20,
}

export function SliderDisabled2(props: NodeProps) {
  return (
    <Shape
      {...SLIDER_DISABLED_2}
      {...props}
      _style={extendStyle(SLIDER_DISABLED_2, props)}
    />
  )
}
