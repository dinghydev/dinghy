import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_SELECT_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=30;fontColor=#000000;align=left',
  },
  _width: 1,
  _height: 390,
}

export function MultiSelect2(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MULTI_SELECT_2)} />
}
