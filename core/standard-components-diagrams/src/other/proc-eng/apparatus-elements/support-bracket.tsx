import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SUPPORT_BRACKET = {
  _style: {
    entity:
      'shape=mxgraph.pid.apparatus_elements.support_bracket;html=1;pointerEvents=1;align=center;verticalLabelPosition=bottom;verticalAlign=top;dashed=0;',
  },
  _original_width: 10,
  _original_height: 10,
}

export function SupportBracket(props: DiagramNodeProps) {
  return (
    <Shape
      {...SUPPORT_BRACKET}
      {...props}
      _style={extendStyle(SUPPORT_BRACKET, props)}
    />
  )
}
