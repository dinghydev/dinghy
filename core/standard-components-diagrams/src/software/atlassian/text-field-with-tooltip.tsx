import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TEXT_FIELD_WITH_TOOLTIP = {
  _style:
    'rounded=1;arcSize=9;fillColor=#ffffff;align=left;spacingLeft=5;strokeColor=#4C9AFF;html=1;strokeWidth=2;fontSize=12',
  _width: 1,
  _height: 80,
}

export function TextFieldWithTooltip(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_FIELD_WITH_TOOLTIP}
      {...props}
      _style={extendStyle(TEXT_FIELD_WITH_TOOLTIP, props)}
    />
  )
}
