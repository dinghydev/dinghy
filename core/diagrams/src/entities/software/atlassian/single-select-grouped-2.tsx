import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SINGLE_SELECT_GROUPED_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=5;fontColor=#000000;align=left',
  },
  _width: 1,
  _height: 260,
}

export function SingleSelectGrouped2(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, SINGLE_SELECT_GROUPED_2)} />
  )
}
