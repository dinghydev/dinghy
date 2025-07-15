import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CREATION_DESTRUCTION_EVENT_3 = {
  _style: 'edgeStyle=none;dashed=1;endArrow=none;html=1;rounded=0;',
  _width: 5,
  _height: 220,
}

export function CreationDestructionEvent3(props: DiagramNodeProps) {
  return <Shape {...CREATION_DESTRUCTION_EVENT_3} {...props} />
}
