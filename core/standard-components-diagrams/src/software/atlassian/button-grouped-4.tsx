import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_GROUPED_4 = {
  _style:
    'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;fontColor=#596780;fontSize=12',
  _width: 4,
  _height: 33,
}

export function ButtonGrouped4(props: DiagramNodeProps) {
  return <Shape {...BUTTON_GROUPED_4} {...props} />
}
