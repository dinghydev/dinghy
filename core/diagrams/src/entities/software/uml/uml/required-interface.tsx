import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REQUIRED_INTERFACE = {
  _style: {
    entity:
      'shape=requiredInterface;html=1;verticalLabelPosition=bottom;sketch=0;',
  },
  _width: 10,
  _height: 20,
}

export function RequiredInterface(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REQUIRED_INTERFACE)} />
}
