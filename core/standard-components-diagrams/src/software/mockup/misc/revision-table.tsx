import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const REVISION_TABLE = {
  _style:
    'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.misc.rrect;rSize=0;strokeColor=#666666;',
  _width: 0,
  _height: 75,
}

export function RevisionTable(props: DiagramNodeProps) {
  return <Shape {...REVISION_TABLE} {...props} />
}
