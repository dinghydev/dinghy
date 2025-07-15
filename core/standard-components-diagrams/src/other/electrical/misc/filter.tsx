import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILTER = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.abstract.filter;',
  _width: 52,
  _height: 46,
}

export function Filter(props: DiagramNodeProps) {
  return <Shape {...FILTER} {...props} />
}
