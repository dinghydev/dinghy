import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT_2 = {
  _style: {
    entity: 'shape=ellipse;fillColor=strokeColor;html=1;',
  },
  _original_width: 3,
  _original_height: 220,
}

export function CreationDestructionEvent2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_2}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_2, props)}
    />
  )
}
