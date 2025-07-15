import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STEREOTYPE_NOTE = {
  _style:
    'shape=note;size=15;spacingLeft=5;html=1;overflow=fill;whiteSpace=wrap;',
  _width: 320,
  _height: 150,
}

export function StereotypeNote(props: DiagramNodeProps) {
  return <Shape {...STEREOTYPE_NOTE} {...props} />
}
