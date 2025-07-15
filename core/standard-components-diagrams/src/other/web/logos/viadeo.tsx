import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VIADEO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.viadeo',
  _width: 73.4,
  _height: 84,
}

export function Viadeo(props: DiagramNodeProps) {
  return <Shape {...VIADEO} {...props} />
}
