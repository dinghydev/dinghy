import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SHARED_PROCESS = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.lean_mapping.manufacturing_process_shared;spacingTop=-5;align=center;whiteSpace=wrap;verticalAlign=top;',
  _width: 100,
  _height: 70,
}

export function SharedProcess(props: DiagramNodeProps) {
  return <Shape {...SHARED_PROCESS} {...props} />
}
