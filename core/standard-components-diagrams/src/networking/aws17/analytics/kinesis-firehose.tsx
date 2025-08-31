import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const KINESIS_FIREHOSE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.kinesis_firehose;fillColor=#F58534;gradientColor=none;',
  },
  _width: 60,
  _height: 64.5,
}

export function KinesisFirehose(props: DiagramNodeProps) {
  return (
    <Shape
      {...KINESIS_FIREHOSE}
      {...props}
      _style={extendStyle(KINESIS_FIREHOSE, props)}
    />
  )
}
