import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXECUTION_SPECIFICATION_2 = {
  _style: {
    entity: 'edgeStyle=none;html=1;dashed=1;endArrow=none;',
  },
  _width: 2,
  _height: 220,
}

export function ExecutionSpecification2(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXECUTION_SPECIFICATION_2}
      {...props}
      _style={extendStyle(EXECUTION_SPECIFICATION_2, props)}
    />
  )
}
