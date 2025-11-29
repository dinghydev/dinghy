import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT = {
  _style: {
    entity: 'shape=rect;fillColor=#eeeeee;html=1;',
  },
  _width: 2,
  _height: 220,
}

export function CreationDestructionEvent(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, CREATION_DESTRUCTION_EVENT)} />
  )
}
