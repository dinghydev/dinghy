import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CREATION_DESTRUCTION_EVENT_6 = {
  _style: {
    entity:
      'edgeStyle=none;endArrow=sysMLx;endSize=22;dashed=1;html=1;rounded=0;',
  },
  _original_width: 10,
  _original_height: 220,
}

export function CreationDestructionEvent6(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_6}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_6, props)}
    />
  )
}
