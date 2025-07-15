import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEXT = {
  _style:
    'text;html=1;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;',
  _width: 60,
  _height: 30,
}

export function Text(props: DiagramNodeProps) {
  return <Shape {...TEXT} {...props} />
}
