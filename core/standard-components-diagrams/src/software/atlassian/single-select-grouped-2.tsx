import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SINGLE_SELECT_GROUPED_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=5;fontColor=#000000;align=left',
  },
  _original_width: 1,
  _original_height: 260,
}

export function SingleSelectGrouped2(props: DiagramNodeProps) {
  return (
    <Shape
      {...SINGLE_SELECT_GROUPED_2}
      {...props}
      _style={extendStyle(SINGLE_SELECT_GROUPED_2, props)}
    />
  )
}
