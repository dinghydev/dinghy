import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOGICAL_DISTRIBUTION = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.logical_distribution;',
  },
  _width: 60,
  _height: 60,
}

export function LogicalDistribution(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOGICAL_DISTRIBUTION}
      {...props}
      _style={extendStyle(LOGICAL_DISTRIBUTION, props)}
    />
  )
}
