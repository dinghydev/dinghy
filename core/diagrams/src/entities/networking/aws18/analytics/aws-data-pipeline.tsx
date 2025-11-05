import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AWS_DATA_PIPELINE = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#ffffff;fillColor=#232F3E;dashed=0;verticalLabelPosition=middle;verticalAlign=bottom;align=center;html=1;whiteSpace=wrap;fontSize=10;fontStyle=1;spacing=3;shape=mxgraph.aws4.productIcon;prIcon=mxgraph.aws4.data_pipeline;',
  },
  _width: 80,
  _height: 110,
}

export function AwsDataPipeline(props: NodeProps) {
  return (
    <Shape
      {...AWS_DATA_PIPELINE}
      {...props}
      _style={extendStyle(AWS_DATA_PIPELINE, props)}
    />
  )
}
