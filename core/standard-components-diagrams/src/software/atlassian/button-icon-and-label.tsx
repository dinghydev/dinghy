import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BUTTON_ICON_AND_LABEL = {
  _style:
    'rounded=1;align=left;fillColor=#F1F2F4;strokeColor=none;html=1;fontColor=#596780;fontSize=12;spacingLeft=26;',
  _width: 0,
  _height: 33,
}

export function ButtonIconAndLabel(props: DiagramNodeProps) {
  return <Shape {...BUTTON_ICON_AND_LABEL} {...props} />
}
