import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXECUTION_SPECIFICATION = {
  _style: {
    entity: 'shape=rect;html=1;fillColor=#eeeeee;',
  },
  _width: 1,
  _height: 220,
}

export function ExecutionSpecification(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXECUTION_SPECIFICATION}
      {...props}
      _style={extendStyle(EXECUTION_SPECIFICATION, props)}
    />
  )
}
