import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATION_INSTANCE_SECIFICATION = {
  _style: {
    entity: 'triangle;aspect=fixed;fillColor=strokeColor;',
  },
  _original_width: 0,
  _original_height: 22,
}

export function AssociationInstanceSecification(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSOCIATION_INSTANCE_SECIFICATION}
      {...props}
      _style={extendStyle(ASSOCIATION_INSTANCE_SECIFICATION, props)}
    />
  )
}
