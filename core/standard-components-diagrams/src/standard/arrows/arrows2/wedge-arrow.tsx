import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEDGE_ARROW = {
  _style: {
    dependency:
      'shape=mxgraph.arrows2.wedgeArrow;html=1;bendable=0;startWidth=50;fillColor=strokeColor;defaultFillColor=invert;defaultGradientColor=invert;',
  },
}

export function WedgeArrow(props: DiagramNodeProps) {
  return <Dependency {...WEDGE_ARROW} {...props} />
}
