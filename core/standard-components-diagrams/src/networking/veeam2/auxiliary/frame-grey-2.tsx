import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRAME_GREY_2 = {
  _style: {
    entity:
      'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#d3d3d3;strokeWidth=2;',
  },
  _width: 150,
  _height: 110.00000000000001,
}

export function FrameGrey2(props: DiagramNodeProps) {
  return (
    <Shape
      {...FRAME_GREY_2}
      {...props}
      _style={extendStyle(FRAME_GREY_2, props)}
    />
  )
}
