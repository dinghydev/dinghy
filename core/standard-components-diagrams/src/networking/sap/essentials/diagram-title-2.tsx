import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAGRAM_TITLE_2 = {
  _style:
    'text;html=1;align=left;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  _width: 500,
  _height: 50,
}

export function DiagramTitle2(props: DiagramNodeProps) {
  return <Shape {...DIAGRAM_TITLE_2} {...props} />
}
