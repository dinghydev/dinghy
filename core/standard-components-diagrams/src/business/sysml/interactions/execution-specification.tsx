import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXECUTION_SPECIFICATION = {
  _style: 'shape=rect;html=1;fillColor=#eeeeee;',
  _width: 1,
  _height: 220,
}

export function ExecutionSpecification(props: DiagramNodeProps) {
  return <Shape {...EXECUTION_SPECIFICATION} {...props} />
}
