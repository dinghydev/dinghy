import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INLINE_EDIT_6 = {
  _style: {
    entity:
      'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.x;strokeColor=#42526E;strokeWidth=2;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 3,
  _height: 60,
}

export function InlineEdit6(props: DiagramNodeProps) {
  return (
    <Shape
      {...INLINE_EDIT_6}
      {...props}
      _style={extendStyle(INLINE_EDIT_6, props)}
    />
  )
}
