import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SLIDER_DISABLED = {
  _style: {
    entity:
      'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDisabled2;strokeColor=#b0b0b0;strokeWidth=2;fillColor=none;handleSize=6;shadow=0;hPos=0;html=1;',
  },
  _width: 210,
  _height: 20,
}

export function SliderDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIDER_DISABLED}
      {...props}
      _style={extendStyle(SLIDER_DISABLED, props)}
    />
  )
}
