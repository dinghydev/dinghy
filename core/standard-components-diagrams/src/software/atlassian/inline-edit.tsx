import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_EDIT = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;html=1;fontSize=11;fontStyle=0;align=left;fontColor=#596780;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _original_width: 350,
  _original_height: 55,
}

export function InlineEdit(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_EDIT}
      {...props}
      _style={extendStyle(INLINE_EDIT, props)}
    />
  )
}
