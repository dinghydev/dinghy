import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_INSTANCE_SECIFICATION_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;align=center;verticalAlign=bottom;labelBackgroundColor=none;',
  },
  _width: 1,
  _height: 22,
}

export function AssociationInstanceSecification2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ASSOCIATION_INSTANCE_SECIFICATION_2)}
    />
  )
}
