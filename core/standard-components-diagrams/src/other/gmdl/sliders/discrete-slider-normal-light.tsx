import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISCRETE_SLIDER_NORMAL_LIGHT = {
  _style:
    'dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;shape=mxgraph.gmdl.slider2;barPos=0;opacity=100;strokeWidth=2;fillColor=#000000;handleSize=10;shadow=0;html=1;',
  _width: 200,
  _height: 10,
}

export function DiscreteSliderNormalLight(props: DiagramNodeProps) {
  return <Shape {...DISCRETE_SLIDER_NORMAL_LIGHT} {...props} />
}
