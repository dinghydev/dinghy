import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTHENTICATE_2 = {
  _style: {
    entity:
      'endArrow=none;html=1;rounded=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;strokeColor=#178b1b;strokeWidth=1.5;',
  },
  _original_width: 1,
  _original_height: 16,
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
