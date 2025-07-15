import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const DATE_PICKER_3 = {
  _style:
    'rounded=1;arcSize=9;fillColor=#ffffff;align=left;spacingLeft=5;strokeColor=#0057D8;html=1;strokeWidth=2;fontColor=#253858;fontSize=12',
  _width: 1,
  _height: 415,
}

export function DatePicker3(props: DiagramNodeProps) {
  return <Shape {...DATE_PICKER_3} {...props} />
}
