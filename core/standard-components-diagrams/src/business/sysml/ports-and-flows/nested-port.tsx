import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NESTED_PORT = {
  _style:
    'html=1;shape=mxgraph.sysml.nestedPort;fontStyle=1;whiteSpace=wrap;align=center;',
  _width: 160,
  _height: 60,
}

export function NestedPort(props: DiagramNodeProps) {
  return <Shape {...NESTED_PORT} {...props} />
}
