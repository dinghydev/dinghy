import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GAMESPOT = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gamespot',
  _width: 81.60000000000001,
  _height: 81.60000000000001,
}

export function Gamespot(props: DiagramNodeProps) {
  return <Shape {...GAMESPOT} {...props} />
}
