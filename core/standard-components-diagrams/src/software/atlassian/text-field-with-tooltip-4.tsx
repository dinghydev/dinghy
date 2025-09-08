import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const TEXT_FIELD_WITH_TOOLTIP_4 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;align=left;spacingLeft=5;strokeColor=#4C9AFF;html=1;strokeWidth=2;fontColor=#000000;fontSize=12;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 1,
  _original_height: 80,
}

export function TextFieldWithTooltip4(props: DiagramNodeProps) {
  return (
    <Shape
      {...TEXT_FIELD_WITH_TOOLTIP_4}
      {...props}
      _style={extendStyle(TEXT_FIELD_WITH_TOOLTIP_4, props)}
    />
  )
}
