import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIBRANCH_PART_ASSOCIATION_3 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=vertical;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;fontFamily=Helvetica;fontSize=11;fontColor=default;startSize=14;shape=connector;',
  _width: 2,
  _height: 50,
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
