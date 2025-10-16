import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MESSENGER_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.messenger_2;gradientColor=#DFDEDE',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Messenger2(props: DiagramNodeProps) {
  return (
    <Shape
      {...MESSENGER_2}
      {...props}
      _style={extendStyle(MESSENGER_2, props)}
    />
  )
}
