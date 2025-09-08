import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STREAMING_DISTRIBUTION = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.streaming_distribution;fillColor=#F58536;gradientColor=none;',
  },
  _original_width: 69,
  _original_height: 72,
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
