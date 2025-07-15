import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DISTRIBUTION_NETWORK_2 = {
  _style:
    'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.distribution;strokeWidth=4;',
  _width: 70,
  _height: 30,
}

export function DistributionNetwork2(props: DiagramNodeProps) {
  return <Shape {...DISTRIBUTION_NETWORK_2} {...props} />
}
