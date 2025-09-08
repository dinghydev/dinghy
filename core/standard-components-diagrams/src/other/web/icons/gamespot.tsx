import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAMESPOT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.gamespot;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Gamespot(props: DiagramNodeProps) {
  return (
    <Shape {...GAMESPOT} {...props} _style={extendStyle(GAMESPOT, props)} />
  )
}
