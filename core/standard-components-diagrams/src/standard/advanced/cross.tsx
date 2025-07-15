import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CROSS = {
  _style: 'shape=cross;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function Cross(props: DiagramNodeProps) {
  return <Shape {...CROSS} {...props} />
}
