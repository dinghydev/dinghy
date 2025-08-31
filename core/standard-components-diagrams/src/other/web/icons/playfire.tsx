import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PLAYFIRE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.playfire;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Playfire(props: DiagramNodeProps) {
  return (
    <Shape {...PLAYFIRE} {...props} _style={extendStyle(PLAYFIRE, props)} />
  )
}
