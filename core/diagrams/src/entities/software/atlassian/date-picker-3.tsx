import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATE_PICKER_3 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;align=left;spacingLeft=5;strokeColor=#0057D8;html=1;strokeWidth=2;fontColor=#253858;fontSize=12',
  },
  _width: 1,
  _height: 415,
}

export function DatePicker3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATE_PICKER_3)} />
}
