import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PYRAMID = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.pyramid;dx1=0.4;dx2=0.6;dy1=0.9;dy2=0.8;',
  _width: 100,
  _height: 100,
}

export function Pyramid(props: DiagramNodeProps) {
  return <Shape {...PYRAMID} {...props} />
}
