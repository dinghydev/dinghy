import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE_NOTE_3 = {
  _style:
    'rounded=0;labelBackgroundColor=none;verticalAlign=top;endArrow=none;fontStyle=1;html=1;',
  _width: 3,
  _height: 150,
}

export function StereotypeNote3(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE_NOTE_3} {...props} />
}
