import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEON_CARROT = {
  _style: 'fillColor=#FFA12D;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function NeonCarrot(props: DiagramNodeProps) {
  return (
    <Shape
      {...NEON_CARROT}
      {...props}
      _style={extendStyle(NEON_CARROT, props)}
    />
  )
}
