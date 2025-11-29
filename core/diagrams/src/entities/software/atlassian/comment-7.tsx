import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMMENT_7 = {
  _style: {
    entity:
      'shape=line;strokeColor=#596780;html=1;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  },
  _width: 1,
  _height: 213,
}

export function Comment7(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COMMENT_7)} />
}
