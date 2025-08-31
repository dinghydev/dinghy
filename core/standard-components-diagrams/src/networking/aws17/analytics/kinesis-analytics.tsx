import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KINESIS_ANALYTICS = {
  _style:
    'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis_analytics;fillColor=#F58534;gradientColor=none;',
  _width: 73.5,
  _height: 75,
}

export function KinesisAnalytics(props: DiagramNodeProps) {
  return (
    <Shape
      {...KINESIS_ANALYTICS}
      {...props}
      _style={extendStyle(KINESIS_ANALYTICS, props)}
    />
  )
}
