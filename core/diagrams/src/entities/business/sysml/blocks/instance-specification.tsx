import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTANCE_SPECIFICATION = {
  _style: {
    entity: 'shape=rect;html=1;overflow=fill;fontSize=15;whiteSpace=wrap;',
  },
  _width: 70,
  _height: 30,
}

export function InstanceSpecification(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, INSTANCE_SPECIFICATION)} />
  )
}
