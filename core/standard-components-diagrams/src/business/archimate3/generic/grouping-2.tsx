import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GROUPING_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;shape=mxgraph.archimate3.grouping;fillColor=none;dashed=1;',
  _width: 60,
  _height: 35,
}

export function Grouping2(props: DiagramNodeProps) {
  return <Shape {...GROUPING_2} {...props} />
}
