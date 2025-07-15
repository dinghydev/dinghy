import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SORT = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.sort;',
  _width: 100,
  _height: 100,
}

export function Sort(props: DiagramNodeProps) {
  return <Shape {...SORT} {...props} />
}
