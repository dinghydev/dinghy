import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT_6 = {
  _style: {
    entity:
      'edgeStyle=none;endArrow=sysMLx;endSize=22;dashed=1;html=1;rounded=0;',
  },
  _width: 10,
  _height: 220,
}

export function CreationDestructionEvent6(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CREATION_DESTRUCTION_EVENT_6)}
    />
  )
}
