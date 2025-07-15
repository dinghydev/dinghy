import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAMETER_3 = {
  _style: 'triangle;html=1;direction=north;',
  _width: 2,
  _height: 40,
}

export function Parameter3(props: DiagramNodeProps) {
  return <Shape {...PARAMETER_3} {...props} />
}
