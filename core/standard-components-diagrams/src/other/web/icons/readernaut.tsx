import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const READERNAUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.readernaut;fillColor=#695D5D;gradientColor=#100E0E',
  },
  _width: 102.4,
  _height: 102.4,
}

export function Readernaut(props: DiagramNodeProps) {
  return (
    <Shape {...READERNAUT} {...props} _style={extendStyle(READERNAUT, props)} />
  )
}
