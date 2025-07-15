import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const EXECUTION_SPECIFICATION_2 = {
  _style: 'edgeStyle=none;html=1;dashed=1;endArrow=none;',
  _width: 2,
  _height: 220,
}

export function ExecutionSpecification2(props: DiagramNodeProps) {
  return <Shape {...EXECUTION_SPECIFICATION_2} {...props} />
}
