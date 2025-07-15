import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRAME_GREY_2 = {
  _style:
    'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#d3d3d3;strokeWidth=2;',
  _width: 150,
  _height: 110.00000000000001,
}

export function FrameGrey2(props: DiagramNodeProps) {
  return <Shape {...FRAME_GREY_2} {...props} />
}
