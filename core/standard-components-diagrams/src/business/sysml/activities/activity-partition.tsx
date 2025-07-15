import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVITY_PARTITION = {
  _style:
    'html=1;shape=mxgraph.sysml.actPart;strokeWidth=3;verticalAlign=top;rotation=-90;whiteSpace=wrap;',
  _width: 100,
  _height: 100,
}

export function ActivityPartition(props: DiagramNodeProps) {
  return <Shape {...ACTIVITY_PARTITION} {...props} />
}
