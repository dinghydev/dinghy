import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const RIGHT = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.right;strokeColor=#0080f0;',
  _width: 6,
  _height: 12,
}

export function Right(props: DiagramNodeProps) {
  return <Shape {...RIGHT} {...props} />
}
