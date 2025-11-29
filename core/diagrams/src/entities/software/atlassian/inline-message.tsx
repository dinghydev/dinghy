import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INLINE_MESSAGE = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;fontSize=11;fontStyle=1;align=left;fontColor=#596780;sketch=1;hachureGap=4;pointerEvents=0;fontFamily=Architects Daughter;fontSource=https%3A%2F%2Ffonts.googleapis.com%2Fcss%3Ffamily%3DArchitects%2BDaughter;',
  },
  _width: 460,
  _height: 180,
}

export function InlineMessage(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INLINE_MESSAGE)} />
}
