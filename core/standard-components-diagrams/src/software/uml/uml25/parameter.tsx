import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PARAMETER = {
  _style: 'html=1;',
  _width: 0,
  _height: 40,
}

export function Parameter(props: DiagramNodeProps) {
  return <Shape {...PARAMETER} {...props} />
}
