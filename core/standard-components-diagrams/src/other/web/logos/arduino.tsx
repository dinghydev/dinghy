import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ARDUINO = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.arduino;fillColor=#36868D;strokeColor=none',
  _width: 67.4,
  _height: 32,
}

export function Arduino(props: DiagramNodeProps) {
  return <Shape {...ARDUINO} {...props} />
}
