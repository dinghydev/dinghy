import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_6 = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=15;align=left;fontColor=#000000;whiteSpace=wrap;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 320,
  _height: 213,
}

export function Comment6(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_6} {...props} _style={extendStyle(COMMENT_6, props)} />
  )
}
