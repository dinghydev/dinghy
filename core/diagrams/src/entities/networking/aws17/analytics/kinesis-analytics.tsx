import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const KINESIS_ANALYTICS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis_analytics;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 73.5,
  _original_height: 75,
}

export function KinesisAnalytics(props: NodeProps) {
  return (
    <Shape
      {...KINESIS_ANALYTICS}
      {...props}
      _style={extendStyle(KINESIS_ANALYTICS, props)}
    />
  )
}
