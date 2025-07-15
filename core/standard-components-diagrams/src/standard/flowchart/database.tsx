import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE = {
  _style:
    'strokeWidth=2;html=1;shape=mxgraph.flowchart.database;whiteSpace=wrap;',
  _width: 60,
  _height: 60,
}

export function Database(props: DiagramNodeProps) {
  return <Shape {...DATABASE} {...props} />
}
