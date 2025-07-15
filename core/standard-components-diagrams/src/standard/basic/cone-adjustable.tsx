import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CONE_ADJUSTABLE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.cone2;dx=0.5;dy=0.9;',
  _width: 100,
  _height: 100,
}

export function ConeAdjustable(props: DiagramNodeProps) {
  return <Shape {...CONE_ADJUSTABLE} {...props} />
}
