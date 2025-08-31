import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIALVIBE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.socialvibe;fillColor=#EE2F7F;strokeColor=none',
  _width: 60,
  _height: 60,
}

export function Socialvibe(props: DiagramNodeProps) {
  return (
    <Shape {...SOCIALVIBE} {...props} _style={extendStyle(SOCIALVIBE, props)} />
  )
}
