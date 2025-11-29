import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANCE_SPECIFICATION_3 = {
  _style: {
    entity:
      'shape=rect;html=1;overflow=fill;whiteSpace=wrap;recursiveResize=0;',
  },
  _width: 0,
  _height: 180,
}

export function InstanceSpecification3(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INSTANCE_SPECIFICATION_3)} />
  )
}
