import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_EXECUTION = {
  _style: {
    entity:
      'html=1;align=right;verticalAlign=top;rounded=1;absoluteArcSize=1;arcSize=50;dashed=0;spacingTop=10;spacingRight=30;whiteSpace=wrap;',
  },
  _original_width: 300,
  _original_height: 160,
}

export function SingleExecution(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_EXECUTION}
      {...props}
      _style={extendStyle(SINGLE_EXECUTION, props)}
    />
  )
}
