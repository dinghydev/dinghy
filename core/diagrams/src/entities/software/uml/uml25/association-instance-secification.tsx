import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ASSOCIATION_INSTANCE_SECIFICATION = {
  _style: {
    entity: 'triangle;aspect=fixed;fillColor=strokeColor;',
  },
  _width: 0,
  _height: 22,
}

export function AssociationInstanceSecification(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, ASSOCIATION_INSTANCE_SECIFICATION)}
    />
  )
}
