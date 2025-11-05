import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTHORIZE_3 = {
  _style: {
    entity:
      'endArrow=blockThin;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#470bed;strokeWidth=1.5;exitX=1.015;exitY=0.505;exitDx=0;exitDy=0;exitPerimeter=0;endFill=1;endSize=4;startSize=4;',
  },
  _width: 2,
  _height: 16,
}

export function Authorize3(props: NodeProps) {
  return (
    <Shape
      {...AUTHORIZE_3}
      {...props}
      _style={extendStyle(AUTHORIZE_3, props)}
    />
  )
}
