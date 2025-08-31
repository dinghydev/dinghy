import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GAMESPOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.gamespot',
  },
  _width: 60,
  _height: 60,
}

export function Gamespot(props: DiagramNodeProps) {
  return (
    <Shape {...GAMESPOT} {...props} _style={extendStyle(GAMESPOT, props)} />
  )
}
