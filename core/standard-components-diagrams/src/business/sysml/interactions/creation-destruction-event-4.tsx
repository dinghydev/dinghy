import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CREATION_DESTRUCTION_EVENT_4 = {
  _style: {
    entity:
      'edgeStyle=none;endArrow=open;verticalAlign=bottom;endSize=12;html=1;rounded=0;',
  },
  _width: 8,
  _height: 220,
}

export function CreationDestructionEvent4(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_4}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_4, props)}
    />
  )
}
