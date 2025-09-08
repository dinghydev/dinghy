import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATE_PICKER_3 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;align=left;spacingLeft=5;strokeColor=#0057D8;html=1;strokeWidth=2;fontColor=#253858;fontSize=12',
  },
  _original_width: 1,
  _original_height: 415,
}

export function DatePicker3(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATE_PICKER_3}
      {...props}
      _style={extendStyle(DATE_PICKER_3, props)}
    />
  )
}
