import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLUE_DATA_QUALITY = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#8C4FFF;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.aws_glue_data_quality;',
  _width: 60,
  _height: 60,
}

export function GlueDataQuality(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLUE_DATA_QUALITY}
      {...props}
      _style={extendStyle(GLUE_DATA_QUALITY, props)}
    />
  )
}
