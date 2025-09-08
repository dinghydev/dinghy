import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const OBJECT_FLOW = {
  _style: {
    entity: 'shape=rect;html=1;rounded=1;strokeWidth=2;whiteSpace=wrap;',
  },
  _original_width: 260,
  _original_height: 60,
}

export function ObjectFlow(props: DiagramNodeProps) {
  return (
    <Shape
      {...OBJECT_FLOW}
      {...props}
      _style={extendStyle(OBJECT_FLOW, props)}
    />
  )
}
