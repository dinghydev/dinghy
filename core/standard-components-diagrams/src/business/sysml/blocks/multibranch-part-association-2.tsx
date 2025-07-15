import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIBRANCH_PART_ASSOCIATION_2 = {
  _style:
    'edgeStyle=elbowEdgeStyle;html=1;elbow=horizontal;align=right;verticalAlign=bottom;endArrow=none;rounded=0;labelBackgroundColor=none;fontFamily=Helvetica;fontSize=11;fontColor=default;startSize=14;shape=connector;',
  _width: 1,
  _height: 50,
}

export function MultibranchPartAssociation2(props: DiagramNodeProps) {
  return <Shape {...MULTIBRANCH_PART_ASSOCIATION_2} {...props} />
}
