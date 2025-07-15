import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CREATION_DESTRUCTION_EVENT = {
  _style: 'shape=rect;fillColor=#eeeeee;html=1;',
  _width: 2,
  _height: 220,
}

export function CreationDestructionEvent(props: DiagramNodeProps) {
  return <Shape {...CREATION_DESTRUCTION_EVENT} {...props} />
}
