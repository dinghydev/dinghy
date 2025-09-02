import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOZENGE_MOVED_SUBTLE = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;strokeColor=#FFAB00;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#42526E',
  },
  _original_width: 60,
  _original_height: 20,
}

export function LozengeMovedSubtle(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_MOVED_SUBTLE}
      {...props}
      _style={extendStyle(LOZENGE_MOVED_SUBTLE, props)}
    />
  )
}
