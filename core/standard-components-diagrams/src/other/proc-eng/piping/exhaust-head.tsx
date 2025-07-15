import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXHAUST_HEAD = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.exhaust_head;',
  _width: 50,
  _height: 40,
}

export function ExhaustHead(props: DiagramNodeProps) {
  return <Shape {...EXHAUST_HEAD} {...props} />
}
