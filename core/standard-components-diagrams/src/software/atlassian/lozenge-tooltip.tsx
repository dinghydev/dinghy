import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOZENGE_TOOLTIP = {
  _style: {
    entity:
      'dashed=0;html=1;rounded=1;fillColor=#172B4D;strokeColor=#172B4D;fontSize=12;align=center;fontStyle=0;strokeWidth=2;fontColor=#ffffff',
  },
  _width: 0,
  _height: 50,
}

export function LozengeTooltip(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOZENGE_TOOLTIP}
      {...props}
      _style={extendStyle(LOZENGE_TOOLTIP, props)}
    />
  )
}
