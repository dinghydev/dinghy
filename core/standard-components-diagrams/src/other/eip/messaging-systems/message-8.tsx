import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSAGE_8 = {
  _style: {
    entity:
      'html=1;strokeWidth=2;outlineConnect=0;dashed=0;align=center;fontSize=8;shape=mxgraph.eip.message_2;fillColor=#00cc00;fontStyle=1;whiteSpace=wrap;html=1;',
  },
  _original_width: 2,
  _original_height: 30,
}

export function Message8(props: DiagramNodeProps) {
  return (
    <Shape {...MESSAGE_8} {...props} _style={extendStyle(MESSAGE_8, props)} />
  )
}
