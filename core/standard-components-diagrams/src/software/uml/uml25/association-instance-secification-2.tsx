import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ASSOCIATION_INSTANCE_SECIFICATION_2 = {
  _style:
    'endArrow=none;html=1;rounded=0;align=center;verticalAlign=bottom;labelBackgroundColor=none;',
  _width: 1,
  _height: 22,
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
