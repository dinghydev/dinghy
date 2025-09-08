import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const APPLICATION = {
  _style: {
    entity:
      'fillColor=#ffffff;strokeColor=#dddddd;shadow=1;strokeWidth=1;rounded=1;absoluteArcSize=1;arcSize=2;labelPosition=center;verticalLabelPosition=middle;align=center;verticalAlign=bottom;spacingLeft=0;fontColor=#999999;fontSize=12;whiteSpace=wrap;spacingBottom=2;html=1;',
  },
  _original_width: 0,
  _original_height: 85,
}

export function Application(props: DiagramNodeProps) {
  return (
    <Shape
      {...APPLICATION}
      {...props}
      _style={extendStyle(APPLICATION, props)}
    />
  )
}
