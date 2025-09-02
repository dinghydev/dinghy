import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NEON_CARROT = {
  _style: {
    entity: 'fillColor=#FFA12D;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
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
