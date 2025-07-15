import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const INLINE_MESSAGE_2 = {
  _style:
    'fillColor=none;strokeColor=none;fontSize=12;fontStyle=0;align=left;fontColor=#000000;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  _width: 5,
  _height: 180,
}

export function InlineMessage2(props: DiagramNodeProps) {
  return <Shape {...INLINE_MESSAGE_2} {...props} />
}
