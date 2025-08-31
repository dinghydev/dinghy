import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SLIDER_DISABLED_3 = {
  _style:
    'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.sliderDisabled2;strokeColor=#b0b0b0;strokeWidth=2;fillColor=#b0b0b0;handleSize=6;shadow=0;hPos=100;html=1;',
  _width: 210,
  _height: 20,
}

export function SliderDisabled3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SLIDER_DISABLED_3}
      {...props}
      _style={extendStyle(SLIDER_DISABLED_3, props)}
    />
  )
}
