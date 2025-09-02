import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT_FIELD_WITH_TOOLTIP_2 = {
  _style: {
    entity:
      'html=1;rounded=1;strokeColor=#DFE1E5;fontSize=12;align=left;shadow=1;arcSize=1;whiteSpace=wrap;verticalAlign=top;spacingLeft=15;spacingRight=15;spacingTop=10',
  },
  _original_width: 2,
  _original_height: 80,
}

export function TextFieldWithTooltip2(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_FIELD_WITH_TOOLTIP_2}
      {...props}
      _style={extendStyle(TEXT_FIELD_WITH_TOOLTIP_2, props)}
    />
  )
}
