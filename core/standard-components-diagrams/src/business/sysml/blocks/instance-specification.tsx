import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INSTANCE_SPECIFICATION = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;fontSize=15;whiteSpace=wrap;',
  },
  _original_width: 70,
  _original_height: 30,
}

export function InstanceSpecification(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSTANCE_SPECIFICATION}
      {...props}
      _style={extendStyle(INSTANCE_SPECIFICATION, props)}
    />
  )
}
