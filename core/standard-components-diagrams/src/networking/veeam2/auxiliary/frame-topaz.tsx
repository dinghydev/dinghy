import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRAME_TOPAZ = {
  _style: {
    entity:
      'rounded=0;whiteSpace=wrap;html=1;fillColor=none;strokeColor=#00B336;strokeWidth=2;',
  },
  _original_width: 150,
  _original_height: 110.00000000000001,
}

export function FrameTopaz(props: DiagramNodeProps) {
  return (
    <Shape
      {...FRAME_TOPAZ}
      {...props}
      _style={extendStyle(FRAME_TOPAZ, props)}
    />
  )
}
