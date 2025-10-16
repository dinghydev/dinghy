import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOLD_TOGGLE_WITH_TOOLTIP_3 = {
  _style: {
    entity:
      'rounded=1;fillColor=#F0F2F5;strokeColor=#D8DCE3;fontColor=#000000;align=left;verticalAlign=middle;fontStyle=0;fontSize=12;labelPosition=right;verticalLabelPosition=middle;spacingLeft=10;html=1;shadow=0;dashed=0;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 4,
  _height: 112,
}

export function BoldToggleWithTooltip3(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOLD_TOGGLE_WITH_TOOLTIP_3}
      {...props}
      _style={extendStyle(BOLD_TOGGLE_WITH_TOOLTIP_3, props)}
    />
  )
}
