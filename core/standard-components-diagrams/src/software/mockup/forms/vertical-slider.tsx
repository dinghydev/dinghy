import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VERTICAL_SLIDER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.forms.horSlider;strokeColor=#999999;sliderStyle=basic;sliderPos=20;handleStyle=circle;fillColor2=#ddeeff;direction=north;',
  _width: 30,
  _height: 150,
}

export function VerticalSlider(props: DiagramNodeProps) {
  return <Shape {...VERTICAL_SLIDER} {...props} />
}
