import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE_NOTE_2 = {
  _style: 'shape=rect;fontStyle=1;html=1;whiteSpace=wrap;align=center;',
  _width: 1,
  _height: 150,
}

export function StereotypeNote2(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE_NOTE_2} {...props} />
}
