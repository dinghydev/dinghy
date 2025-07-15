import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TIMESTAMP = {
  _style:
    'text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;overflow=hidden;',
  _width: 0,
  _height: 20,
}

export function Timestamp(props: DiagramNodeProps) {
  return <Shape {...TIMESTAMP} {...props} />
}
