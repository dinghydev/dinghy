import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CREATION_DESTRUCTION_EVENT = {
  _style: {
    entity: 'shape=rect;fillColor=#eeeeee;html=1;',
  },
  _width: 2,
  _height: 220,
}

export function CreationDestructionEvent(props: DiagramNodeProps) {
  return (
    <Shape
      {...CREATION_DESTRUCTION_EVENT}
      {...props}
      _style={extendStyle(CREATION_DESTRUCTION_EVENT, props)}
    />
  )
}
