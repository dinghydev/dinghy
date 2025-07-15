import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CREATION_DESTRUCTION_EVENT_2 = {
  _style: 'shape=ellipse;fillColor=strokeColor;html=1;',
  _width: 3,
  _height: 220,
}

export function CreationDestructionEvent2(props: DiagramNodeProps) {
  return <Shape {...CREATION_DESTRUCTION_EVENT_2} {...props} />
}
