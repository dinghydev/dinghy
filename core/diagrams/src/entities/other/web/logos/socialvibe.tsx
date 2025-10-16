import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOCIALVIBE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.socialvibe;fillColor=#EE2F7F;strokeColor=none',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Socialvibe(props: DiagramNodeProps) {
  return (
    <Shape {...SOCIALVIBE} {...props} _style={extendStyle(SOCIALVIBE, props)} />
  )
}
