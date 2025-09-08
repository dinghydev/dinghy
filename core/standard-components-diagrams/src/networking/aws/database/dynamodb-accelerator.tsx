import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DYNAMODB_ACCELERATOR = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;fillColor=#C925D1;strokeColor=none;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;pointerEvents=1;shape=mxgraph.aws4.dynamodb_dax;',
  },
  _original_width: 78,
  _original_height: 72,
}

export function DynamodbAccelerator(props: DiagramNodeProps) {
  return (
    <Shape
      {...DYNAMODB_ACCELERATOR}
      {...props}
      _style={extendStyle(DYNAMODB_ACCELERATOR, props)}
    />
  )
}
