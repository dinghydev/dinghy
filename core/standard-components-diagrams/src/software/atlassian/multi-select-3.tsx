import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_SELECT_3 = {
  _style: {
    entity:
      'html=1;rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;fontSize=12;align=left;fontColor=#000000;shadow=1;arcSize=1;whiteSpace=wrap;spacing=2;verticalAlign=top;fontStyle=0;spacingLeft=20;spacingTop=15;',
  },
  _original_width: 2,
  _original_height: 390,
}

export function MultiSelect3(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_SELECT_3}
      {...props}
      _style={extendStyle(MULTI_SELECT_3, props)}
    />
  )
}
