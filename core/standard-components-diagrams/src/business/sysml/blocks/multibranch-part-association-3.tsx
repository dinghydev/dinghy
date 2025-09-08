import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTIBRANCH_PART_ASSOCIATION_3 = {
  _style: {
    entity:
      'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;fontFamily=Helvetica;fontSize=11;fontColor=default;startSize=14;shape=connector;',
  },
  _original_width: 2,
  _original_height: 50,
}

export function MultibranchPartAssociation3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIBRANCH_PART_ASSOCIATION_3}
      {...props}
      _style={extendStyle(MULTIBRANCH_PART_ASSOCIATION_3, props)}
    />
  )
}
