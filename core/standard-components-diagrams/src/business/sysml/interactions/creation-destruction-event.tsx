import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CREATION_DESTRUCTION_EVENT = {
  _style: 'shape=rect;fillColor=#eeeeee;html=1;',
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
