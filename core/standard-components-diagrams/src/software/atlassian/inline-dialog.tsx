import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_DIALOG = {
  _style: {
    entity:
      'rounded=1;fillColor=#42526E;strokeColor=none;shadow=0;html=1;arcSize=12;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 1,
  _original_height: 228,
}

export function InlineDialog(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_DIALOG}
      {...props}
      _style={extendStyle(INLINE_DIALOG, props)}
    />
  )
}
