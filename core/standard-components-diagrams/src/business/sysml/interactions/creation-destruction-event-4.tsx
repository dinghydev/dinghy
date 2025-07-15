import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CREATION_DESTRUCTION_EVENT_4 = {
  _style:
    'edgeStyle=none;endArrow=open;verticalAlign=bottom;endSize=12;html=1;rounded=0;',
  _width: 8,
  _height: 220,
}

export function CreationDestructionEvent4(props: DiagramNodeProps) {
  return <Shape {...CREATION_DESTRUCTION_EVENT_4} {...props} />
}
