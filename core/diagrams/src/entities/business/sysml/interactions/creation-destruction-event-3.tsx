import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT_3 = {
  _style: {
    entity: 'edgeStyle=none;dashed=1;endArrow=none;html=1;rounded=0;',
  },
  _width: 5,
  _height: 220,
}

export function CreationDestructionEvent3(props: NodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT_3}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT_3, props)}
    />
  )
}
