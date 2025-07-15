import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOURCEFORGE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sourceforge',
  _width: 74.2,
  _height: 74.4,
}

export function Sourceforge(props: DiagramNodeProps) {
  return <Shape {...SOURCEFORGE} {...props} />
}
