import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DISTRIBUTION_NETWORK = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#AFFFAF;shape=mxgraph.archimate3.application;appType=distribution;archiType=square;',
  },
  _width: 150,
  _height: 75,
}

export function DistributionNetwork(props: DiagramNodeProps) {
  return (
    <Shape
      {...DISTRIBUTION_NETWORK}
      {...props}
      _style={extendStyle(DISTRIBUTION_NETWORK, props)}
    />
  )
}
