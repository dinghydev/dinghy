import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_SELECT_GROUPED_3 = {
  _style:
    'rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;shadow=1;arcSize=1;fontSize=12;fontColor=#596780;align=center;html=1;verticalAlign=top;spacingTop=5;',
  _width: 2,
  _height: 260,
}

export function SingleSelectGrouped3(props: DiagramNodeProps) {
  return <Shape {...SINGLE_SELECT_GROUPED_3} {...props} />
}
