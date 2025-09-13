import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INLINE_EDIT_3 = {
  _style: {
    entity:
      'rounded=1;arcSize=3;fillColor=#ffffff;strokeColor=#DFE1E5;strokeWidth=1;shadow=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 2,
  _height: 55,
}

export function InlineEdit3(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_EDIT_3}
      {...props}
      _style={extendStyle(INLINE_EDIT_3, props)}
    />
  )
}
