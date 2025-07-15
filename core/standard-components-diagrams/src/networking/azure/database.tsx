import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATABASE = {
  _style:
    'verticalLabelPosition=bottom;html=1;verticalAlign=top;align=center;strokeColor=none;fillColor=#00BEF2;shape=mxgraph.azure.database;',
  _width: 37.5,
  _height: 50,
}

export function Database(props: DiagramNodeProps) {
  return <Shape {...DATABASE} {...props} />
}
