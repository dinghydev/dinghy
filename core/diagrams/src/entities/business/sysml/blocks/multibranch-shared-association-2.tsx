import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_SHARED_ASSOCIATION_2 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;',
  },
  _width: 1,
  _height: 50,
}

export function MultibranchSharedAssociation2(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MULTIBRANCH_SHARED_ASSOCIATION_2)}
    />
  )
}
