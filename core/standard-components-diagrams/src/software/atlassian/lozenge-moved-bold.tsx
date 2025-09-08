import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOZENGE_MOVED_BOLD = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#FFAB00;strokeColor=#FFAB00;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#42526E',
  },
  _original_width: 60,
  _original_height: 20,
}

export function LozengeMovedBold(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_MOVED_BOLD}
      {...props}
      _style={extendStyle(LOZENGE_MOVED_BOLD, props)}
    />
  )
}
