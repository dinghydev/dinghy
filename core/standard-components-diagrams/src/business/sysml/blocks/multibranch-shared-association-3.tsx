import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIBRANCH_SHARED_ASSOCIATION_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;',
  _width: 2,
  _height: 50,
}

export function MultibranchSharedAssociation3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIBRANCH_SHARED_ASSOCIATION_3}
      {...props}
      _style={extendStyle(MULTIBRANCH_SHARED_ASSOCIATION_3, props)}
    />
  )
}
