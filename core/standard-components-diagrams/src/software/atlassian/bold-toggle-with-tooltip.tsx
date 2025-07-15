import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BOLD_TOGGLE_WITH_TOOLTIP = {
  _style:
    'rounded=1;arcSize=10;fillColor=#172B4D;strokeColor=none;html=1;fontSize=11;align=center;fontColor=#ffffff;fontStyle=0;fontSize=11;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 2,
  _height: 112,
}

export function BoldToggleWithTooltip(props: DiagramNodeProps) {
  return <Shape {...BOLD_TOGGLE_WITH_TOOLTIP} {...props} />
}
