import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const KINESIS_STREAMS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis_streams;fillColor=#F58534;gradientColor=none;',
  },
  _original_width: 60,
  _original_height: 63,
}

export function KinesisStreams(props: DiagramNodeProps) {
  return (
    <Shape
      {...KINESIS_STREAMS}
      {...props}
      _style={extendStyle(KINESIS_STREAMS, props)}
    />
  )
}
