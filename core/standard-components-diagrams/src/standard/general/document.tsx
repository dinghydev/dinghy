import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DOCUMENT = {
  _style: 'shape=document;whiteSpace=wrap;html=1;boundedLbl=1;',
  _width: 120,
  _height: 80,
}

export function Document(props: DiagramNodeProps) {
  return <Shape {...DOCUMENT} {...props} />
}
