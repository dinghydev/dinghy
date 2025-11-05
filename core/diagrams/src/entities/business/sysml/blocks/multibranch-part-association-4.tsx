import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_PART_ASSOCIATION_4 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=left;verticalAlign=bottom;endArrow=diamondThin;rounded=0;endFill=1;endSize=12;labelBackgroundColor=none;fontFamily=Helvetica;fontSize=11;fontColor=default;shape=connector;',
  },
  _width: 3,
  _height: 50,
}

export function MultibranchPartAssociation4(props: NodeProps) {
  return (
    <Shape
      {...MULTIBRANCH_PART_ASSOCIATION_4}
      {...props}
      _style={extendStyle(MULTIBRANCH_PART_ASSOCIATION_4, props)}
    />
  )
}
