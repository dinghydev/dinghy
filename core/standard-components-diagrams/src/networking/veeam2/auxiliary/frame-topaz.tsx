import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const FRAME_TOPAZ = {
  _style:
    'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#00B336;strokeWidth=2;',
  _width: 150,
  _height: 110.00000000000001,
}

export function FrameTopaz(props: DiagramNodeProps) {
  return <Shape {...FRAME_TOPAZ} {...props} />
}
