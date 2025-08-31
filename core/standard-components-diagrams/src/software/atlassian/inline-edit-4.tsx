import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_EDIT_4 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#ffffff;strokeColor=#4C9AFF;html=1;strokeWidth=2;spacingLeft=30;fontColor=#000000;align=left;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 1,
  _height: 60,
}

export function InlineEdit4(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_EDIT_4}
      {...props}
      _style={extendStyle(INLINE_EDIT_4, props)}
    />
  )
}
