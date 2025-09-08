import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const EXECUTION_REGION = {
  _style: {
    entity:
      'html=1;dashed=0;rounded=1;absoluteArcSize=1;arcSize=20;verticalAlign=middle;align=center;whiteSpace=wrap;',
  },
  _original_width: 0,
  _original_height: 50,
}

export function ExecutionRegion(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXECUTION_REGION}
      {...props}
      _style={extendStyle(EXECUTION_REGION, props)}
    />
  )
}
