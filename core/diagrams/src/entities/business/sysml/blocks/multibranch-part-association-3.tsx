import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_PART_ASSOCIATION_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;fontFamily=Helvetica;fontSize=11;fontColor=default;startSize=14;shape=connector;',
  },
  _width: 2,
  _height: 50,
}

export function MultibranchPartAssociation3(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, MULTIBRANCH_PART_ASSOCIATION_3)}
    />
  )
}
