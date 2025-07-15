import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_GROUPED_3 = {
  _style:
    'rounded=1;fillColor=#F1F2F4;align=center;strokeColor=none;html=1;fontColor=#596780;fontSize=12;whiteSpace=wrap;',
  _width: 1,
  _height: 33,
}

export function ButtonGrouped3(props: DiagramNodeProps) {
  return <Shape {...BUTTON_GROUPED_3} {...props} />
}
