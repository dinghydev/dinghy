import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FILTER_2 = {
  _style:
    'verticalLabelPosition=bottom;outlineConnect=0;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.misc.filter_2;',
  _width: 100,
  _height: 100,
}

export function Filter2(props: DiagramNodeProps) {
  return <Shape {...FILTER_2} {...props} />
}
