import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DATA_PIPELINE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.data_pipeline;fillColor=#F58534;gradientColor=none;',
  },
  _width: 67.5,
  _height: 81,
}

export function DataPipeline(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_PIPELINE}
      {...props}
      _style={extendStyle(DATA_PIPELINE, props)}
    />
  )
}
