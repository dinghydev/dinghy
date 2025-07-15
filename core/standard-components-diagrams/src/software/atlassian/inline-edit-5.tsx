import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_EDIT_5 = {
  _style:
    'html=1;shadow=0;dashed=0;shape=mxgraph.atlassian.check;strokeColor=#42526E;strokeWidth=2;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;fontSize=20;',
  _width: 2,
  _height: 60,
}

export function InlineEdit5(props: DiagramNodeProps) {
  return <Shape {...INLINE_EDIT_5} {...props} />
}
