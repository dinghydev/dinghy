import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_LABEL_ONLY = {
  _style:
    'rounded=1;align=center;fillColor=#F1F2F4;strokeColor=none;html=1;whiteSpace=wrap;fontColor=#596780;fontSize=12',
  _width: 0,
  _height: 33,
}

export function ButtonLabelOnly(props: DiagramNodeProps) {
  return <Shape {...BUTTON_LABEL_ONLY} {...props} />
}
