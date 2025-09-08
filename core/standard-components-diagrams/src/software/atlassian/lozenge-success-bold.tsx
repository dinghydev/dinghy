import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOZENGE_SUCCESS_BOLD = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#008364;strokeColor=#008364;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#ffffff',
  },
  _original_width: 70,
  _original_height: 20,
}

export function LozengeSuccessBold(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_SUCCESS_BOLD}
      {...props}
      _style={extendStyle(LOZENGE_SUCCESS_BOLD, props)}
    />
  )
}
