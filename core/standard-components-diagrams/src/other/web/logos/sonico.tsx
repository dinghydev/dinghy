import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SONICO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.sonico;fillColor=#01AEF0;strokeColor=none',
  _width: 69.2,
  _height: 63.2,
}

export function Sonico(props: DiagramNodeProps) {
  return <Shape {...SONICO} {...props} />
}
