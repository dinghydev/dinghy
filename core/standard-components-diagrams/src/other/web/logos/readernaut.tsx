import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const READERNAUT = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.readernaut;fillColor=#000000;strokeColor=none',
  },
  _width: 60,
  _height: 60,
}

export function Readernaut(props: DiagramNodeProps) {
  return (
    <Shape {...READERNAUT} {...props} _style={extendStyle(READERNAUT, props)} />
  )
}
