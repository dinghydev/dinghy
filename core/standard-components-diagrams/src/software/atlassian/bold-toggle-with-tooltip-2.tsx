import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BOLD_TOGGLE_WITH_TOOLTIP_2 = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;align=left;fontColor=#596780;fontStyle=0;fontSize=11;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 3,
  _original_height: 112,
}

export function BoldToggleWithTooltip2(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOLD_TOGGLE_WITH_TOOLTIP_2}
      {...props}
      _style={extendStyle(BOLD_TOGGLE_WITH_TOOLTIP_2, props)}
    />
  )
}
