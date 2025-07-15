import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GABBR = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gabbr;fillColor=#F05B1E',
  _width: 64.4,
  _height: 66,
}

export function Gabbr(props: DiagramNodeProps) {
  return <Shape {...GABBR} {...props} />
}
