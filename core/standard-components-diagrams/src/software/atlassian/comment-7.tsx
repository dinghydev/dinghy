import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMMENT_7 = {
  _style: {
    entity:
      'shape=line;strokeColor=#596780;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 1,
  _height: 213,
}

export function Comment7(props: DiagramNodeProps) {
  return (
    <Shape {...COMMENT_7} {...props} _style={extendStyle(COMMENT_7, props)} />
  )
}
