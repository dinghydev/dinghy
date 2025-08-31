import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOZENGE_MOVED_SUBTLE = {
  _style:
    'dashed=0;html=1;rounded=1;strokeColor=#FFAB00;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#42526E',
  _width: 60,
  _height: 20,
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
