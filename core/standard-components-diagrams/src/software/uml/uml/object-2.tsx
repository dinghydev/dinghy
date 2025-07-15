import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const OBJECT_2 = {
  _style: 'verticalAlign=top;align=left;overflow=fill;html=1;whiteSpace=wrap;',
  _width: 160,
  _height: 90,
}

export function Object2(props: DiagramNodeProps) {
  return <Shape {...OBJECT_2} {...props} />
}
