import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TEXT_FIELD_WITH_TOOLTIP_2 = {
  _style:
    'html=1;rounded=1;strokeColor=#DFE1E5;fontSize=12;align=left;shadow=1;arcSize=1;whiteSpace=wrap;verticalAlign=top;spacingLeft=15;spacingRight=15;spacingTop=10',
  _width: 2,
  _height: 80,
}

export function TextFieldWithTooltip2(props: DiagramNodeProps) {
  return <Shape {...TEXT_FIELD_WITH_TOOLTIP_2} {...props} />
}
