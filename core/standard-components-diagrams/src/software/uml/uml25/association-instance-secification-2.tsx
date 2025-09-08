import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ASSOCIATION_INSTANCE_SECIFICATION_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;align=center;verticalAlign=bottom;labelBackgroundColor=none;',
  },
  _original_width: 1,
  _original_height: 22,
}

export function AssociationInstanceSecification2(props: DiagramNodeProps) {
  return (
    <Shape
      {...ASSOCIATION_INSTANCE_SECIFICATION_2}
      {...props}
      _style={extendStyle(ASSOCIATION_INSTANCE_SECIFICATION_2, props)}
    />
  )
}
