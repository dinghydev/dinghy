import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CREATION_DESTRUCTION_EVENT_3 = {
  _style: {
    entity: 'edgeStyle=none;dashed=1;endArrow=none;html=1;rounded=0;',
  },
  _original_width: 5,
  _original_height: 220,
}

export function CreationDestructionEvent3(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_3}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_3, props)}
    />
  )
}
