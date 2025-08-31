import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOZENGE_CURRENT_BOLD = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#0057D8;strokeColor=#0057D8;fontSize=12;align=center;fontStyle=1;strokeWidth=2;fontColor=#ffffff',
  },
  _width: 100,
  _height: 20,
}

export function LozengeCurrentBold(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_CURRENT_BOLD}
      {...props}
      _style={extendStyle(LOZENGE_CURRENT_BOLD, props)}
    />
  )
}
