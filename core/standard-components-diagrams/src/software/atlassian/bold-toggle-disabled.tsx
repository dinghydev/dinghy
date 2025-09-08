import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BOLD_TOGGLE_DISABLED = {
  _style: {
    entity:
      'fillColor=#F1F2F4;strokeColor=none;rounded=1;arcSize=50;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 110,
  _original_height: 20,
}

export function BoldToggleDisabled(props: DiagramNodeProps) {
  return (
    <Shape
      {...BOLD_TOGGLE_DISABLED}
      {...props}
      _style={extendStyle(BOLD_TOGGLE_DISABLED, props)}
    />
  )
}
