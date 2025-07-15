import { Dependency } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEDGE_ARROW_DASHED = {
  _style:
    'shape=mxgraph.arrows2.wedgeArrowDashed2;html=1;bendable=0;startWidth=50;stepSize=15;',
  _width: 100,
  _height: 100,
}

export function WedgeArrowDashed(props: DiagramNodeProps) {
  return <Dependency {...WEDGE_ARROW_DASHED} {...props} />
}
