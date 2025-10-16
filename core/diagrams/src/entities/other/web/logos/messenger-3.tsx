import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSENGER_3 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.messenger_3;fillColor=#437BBD;strokeColor=#dddddd',
  },
  _original_width: 64.4,
  _original_height: 64.8,
}

export function Messenger3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSENGER_3}
      {...props}
      _style={extendStyle(MESSENGER_3, props)}
    />
  )
}
