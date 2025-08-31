import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_MESSAGE_4 = {
  _style:
    'rounded=1;arcSize=3;fillColor=#ffffff;strokeColor=#DFE1E5;strokeWidth=1;shadow=1;align=left;html=1;whiteSpace=wrap;spacingLeft=20;spacingRight=20;fontSize=12;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 7,
  _height: 180,
}

export function InlineMessage4(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_MESSAGE_4}
      {...props}
      _style={extendStyle(INLINE_MESSAGE_4, props)}
    />
  )
}
