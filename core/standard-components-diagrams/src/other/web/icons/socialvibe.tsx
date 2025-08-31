import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SOCIALVIBE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.socialvibe;fillColor=#FA16E2;gradientColor=#DF064B',
  _width: 102.4,
  _height: 102.4,
}

export function Socialvibe(props: DiagramNodeProps) {
  return (
    <Shape {...SOCIALVIBE} {...props} _style={extendStyle(SOCIALVIBE, props)} />
  )
}
