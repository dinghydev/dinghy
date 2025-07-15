import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SOCIALVIBE = {
  _style:
    'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.socialvibe;fillColor=#EE2F7F;strokeColor=none',
  _width: 50,
  _height: 50,
}

export function Socialvibe(props: DiagramNodeProps) {
  return <Shape {...SOCIALVIBE} {...props} />
}
