import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TRUST_3 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#cc00dc;strokeWidth=1.5;exitX=1.015;exitY=0.505;exitDx=0;exitDy=0;exitPerimeter=0;endFill=1;endSize=4;startSize=4;',
  },
  _width: 2,
  _height: 16,
}

export function Trust3(props: NodeProps) {
  return <Shape {...TRUST_3} {...props} _style={extendStyle(TRUST_3, props)} />
}
