import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHECK = {
  _style:
    'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.check;strokeColor=#0080f0;',
  _width: 10,
  _height: 8,
}

export function Check(props: DiagramNodeProps) {
  return <Shape {...CHECK} {...props} />
}
