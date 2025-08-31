import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_10 = {
  _style:
    'html=1;fillColor=none;strokeColor=none;fontSize=12;align=left;fontColor=#000000;whiteSpace=wrap;verticalAlign=top;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 6,
  _height: 213,
}

export function Comment10(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_10} {...props} _style={extendStyle(COMMENT_10, props)} />
  )
}
