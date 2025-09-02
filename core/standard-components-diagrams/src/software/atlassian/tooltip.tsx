import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLTIP = {
  _style: {
    entity:
      'rounded=1;arcSize=10;fillColor=#172B4D;strokeColor=none;html=1;fontSize=11;align=center;fontColor=#ffffff;fontStyle=0;fontSize=11;sketch=0;',
  },
  _original_width: 65,
  _original_height: 20,
}

export function Tooltip(props: DiagramNodeProps) {
  return <Shape {...TOOLTIP} {...props} _style={extendStyle(TOOLTIP, props)} />
}
