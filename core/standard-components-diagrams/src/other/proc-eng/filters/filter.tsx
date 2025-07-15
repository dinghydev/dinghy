import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILTER = {
  _style:
    'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.filters.filter;',
  _width: 50,
  _height: 50,
}

export function Filter(props: DiagramNodeProps) {
  return <Shape {...FILTER} {...props} />
}
