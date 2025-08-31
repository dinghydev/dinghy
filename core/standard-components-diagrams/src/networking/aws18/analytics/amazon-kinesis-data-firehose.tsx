import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AMAZON_KINESIS_DATA_FIREHOSE = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.kinesis_data_firehose;',
  _width: 80,
  _height: 120,
}

export function AmazonKinesisDataFirehose(props: DiagramNodeProps) {
  return (
    <Shape
      {...AMAZON_KINESIS_DATA_FIREHOSE}
      {...props}
      _style={extendStyle(AMAZON_KINESIS_DATA_FIREHOSE, props)}
    />
  )
}
