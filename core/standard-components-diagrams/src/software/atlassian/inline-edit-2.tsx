import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_EDIT_2 = {
  _style: {
    entity:
      'rounded=1;arcSize=9;fillColor=#253858;strokeColor=none;html=1;strokeWidth=2;spacingLeft=30;fontColor=#ffffff;align=left;sketch=0;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _original_width: 1,
  _original_height: 55,
}

export function InlineEdit2(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_EDIT_2}
      {...props}
      _style={extendStyle(INLINE_EDIT_2, props)}
    />
  )
}
