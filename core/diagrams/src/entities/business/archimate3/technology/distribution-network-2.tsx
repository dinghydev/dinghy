import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DISTRIBUTION_NETWORK_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.distribution;strokeWidth=4;',
  },
  _width: 70,
  _height: 30,
}

export function DistributionNetwork2(props: NodeProps) {
  return (
    <Shape
      {...DISTRIBUTION_NETWORK_2}
      {...props}
      _style={extendStyle(DISTRIBUTION_NETWORK_2, props)}
    />
  )
}
