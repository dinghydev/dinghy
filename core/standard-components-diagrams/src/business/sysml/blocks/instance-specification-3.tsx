import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INSTANCE_SPECIFICATION_3 = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _original_width: 0,
  _original_height: 180,
}

export function InstanceSpecification3(props: DiagramNodeProps) {
  return (
    <Shape
      {...INSTANCE_SPECIFICATION_3}
      {...props}
      _style={extendStyle(INSTANCE_SPECIFICATION_3, props)}
    />
  )
}
