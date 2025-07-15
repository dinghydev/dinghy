import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const LOCK = {
  _style:
    'shape=mxgraph.cisco.security.lock;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 53,
  _height: 61,
}

export function Lock(props: DiagramNodeProps) {
  return <Shape {...LOCK} {...props} />
}
