import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDWATCH_EVIDENTLY = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#E7157B;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.cloudwatch_evidently;',
  },
  _original_width: 78,
  _original_height: 78,
}

export function CloudwatchEvidently(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDWATCH_EVIDENTLY}
      {...props}
      _style={extendStyle(CLOUDWATCH_EVIDENTLY, props)}
    />
  )
}
