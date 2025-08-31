import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SAGEMAKER_CANVAS = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#01A88D;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.sagemaker_canvas;',
  },
  _width: 60,
  _height: 60,
}

export function SagemakerCanvas(props: DiagramNodeProps) {
  return (
    <Shape
      {...SAGEMAKER_CANVAS}
      {...props}
      _style={extendStyle(SAGEMAKER_CANVAS, props)}
    />
  )
}
