import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STARTAID = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.startaid;fillColor=#409FCF;strokeColor=none',
  },
  _width: 41.2,
  _height: 42.6,
}

export function Startaid(props: DiagramNodeProps) {
  return (
    <Shape {...STARTAID} {...props} _style={extendStyle(STARTAID, props)} />
  )
}
