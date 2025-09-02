import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const SINGLE_SELECT_GROUPED_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;arcSize=1;fontSize=12;fontColor=#596780;align=center;html=1;verticalAlign=top;spacingTop=5;',
  },
  _original_width: 2,
  _original_height: 260,
}

export function SingleSelectGrouped3(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SELECT_GROUPED_3}
      {...props}
      _style={extendStyle(SINGLE_SELECT_GROUPED_3, props)}
    />
  )
}
