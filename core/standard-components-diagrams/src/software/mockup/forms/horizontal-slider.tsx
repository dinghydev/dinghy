import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const HORIZONTAL_SLIDER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.forms.horSlider;strokeColor=#999999;sliderStyle=basic;sliderPos=20;handleStyle=circle;fillColor2=#ddeeff;',
  },
  _original_width: 150,
  _original_height: 30,
}

export function HorizontalSlider(props: DiagramNodeProps) {
  return (
    <Shape
      {...HORIZONTAL_SLIDER}
      {...props}
      _style={extendStyle(HORIZONTAL_SLIDER, props)}
    />
  )
}
