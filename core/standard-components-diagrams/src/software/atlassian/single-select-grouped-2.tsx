import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SINGLE_SELECT_GROUPED_2 = {
  _style:
    'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=5;fontColor=#000000;align=left',
  _width: 1,
  _height: 260,
}

export function SingleSelectGrouped2(props: DiagramNodeProps) {
  return <Shape {...SINGLE_SELECT_GROUPED_2} {...props} />
}
