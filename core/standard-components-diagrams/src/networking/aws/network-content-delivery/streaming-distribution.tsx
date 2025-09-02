import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STREAMING_DISTRIBUTION = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.streaming_distribution;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function StreamingDistribution(props: DiagramNodeProps) {
  return (
    <Shape
      {...STREAMING_DISTRIBUTION}
      {...props}
      _style={extendStyle(STREAMING_DISTRIBUTION, props)}
    />
  )
}
