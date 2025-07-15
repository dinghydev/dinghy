import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DIAMOND = {
  _style: 'rhombus;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function Diamond(props: DiagramNodeProps) {
  return <Shape {...DIAMOND} {...props} />
}
