import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MESSENGER_2 = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.weblogos.messenger_2',
  },
  _width: 64.4,
  _height: 64.8,
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
