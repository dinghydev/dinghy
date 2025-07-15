import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COLLATE = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.collate;',
  _width: 100,
  _height: 100,
}

export function Collate(props: DiagramNodeProps) {
  return <Shape {...COLLATE} {...props} />
}
