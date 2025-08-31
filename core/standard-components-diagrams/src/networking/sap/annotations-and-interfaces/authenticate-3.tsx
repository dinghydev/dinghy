import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATE_3 = {
  _style:
    'endArrow=blockThin;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#178b1b;strokeWidth=1.5;exitX=1.015;exitY=0.505;exitDx=0;exitDy=0;exitPerimeter=0;endFill=1;endSize=4;startSize=4;',
  _width: 2,
  _height: 16,
}

export function Authenticate3(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTHENTICATE_3}
      {...props}
      _style={extendStyle(AUTHENTICATE_3, props)}
    />
  )
}
