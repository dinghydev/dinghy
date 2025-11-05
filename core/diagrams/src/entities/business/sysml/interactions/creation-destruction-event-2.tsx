import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT_2 = {
  _style: {
    entity: 'shape=ellipse;fillColor=strokeColor;html=1;',
  },
  _width: 3,
  _height: 220,
}

export function CreationDestructionEvent2(props: NodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_2}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_2, props)}
    />
  )
}
