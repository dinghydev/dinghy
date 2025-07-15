import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SLIDER = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iSlider;barPos=20;',
  _width: 150,
  _height: 10,
}

export function Slider(props: DiagramNodeProps) {
  return <Shape {...SLIDER} {...props} />
}
