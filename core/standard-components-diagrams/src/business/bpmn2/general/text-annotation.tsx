import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEXT_ANNOTATION = {
  _style:
    'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  _width: 80,
  _height: 30,
}

export function TextAnnotation(props: DiagramNodeProps) {
  return <Shape {...TEXT_ANNOTATION} {...props} />
}
