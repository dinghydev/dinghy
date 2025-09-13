import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTHENTICATE_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#178b1b;strokeWidth=1.5;',
  },
  _width: 1,
  _height: 16,
}

export function Authenticate2(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATE_2}
      {...props}
      _style={extendStyle(AUTHENTICATE_2, props)}
    />
  )
}
