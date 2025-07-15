import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIRECTION = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iDir;',
  _width: 100,
  _height: 100,
}

export function Direction(props: DiagramNodeProps) {
  return <Shape {...DIRECTION} {...props} />
}
