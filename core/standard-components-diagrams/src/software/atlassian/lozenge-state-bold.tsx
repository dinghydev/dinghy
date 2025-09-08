import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOZENGE_STATE_BOLD = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#DFE1E6;strokeColor=#DFE1E6;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#42526E',
  },
  _original_width: 70,
  _original_height: 20,
}

export function LozengeStateBold(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_STATE_BOLD}
      {...props}
      _style={extendStyle(LOZENGE_STATE_BOLD, props)}
    />
  )
}
