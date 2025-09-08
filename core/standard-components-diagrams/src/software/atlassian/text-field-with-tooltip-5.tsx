import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT_FIELD_WITH_TOOLTIP_5 = {
  _style: {
    entity:
      'html=1;rounded=1;fillColor=#ffffff;strokeColor=#DFE1E5;fontSize=12;align=left;fontColor=#000000;shadow=1;arcSize=1;whiteSpace=wrap;verticalAlign=top;spacingLeft=15;spacingRight=15;spacingTop=10;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 2,
  _original_height: 80,
}

export function TextFieldWithTooltip5(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_FIELD_WITH_TOOLTIP_5}
      {...props}
      _style={extendStyle(TEXT_FIELD_WITH_TOOLTIP_5, props)}
    />
  )
}
