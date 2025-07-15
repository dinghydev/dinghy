import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEON_CARROT = {
  _style: 'fillColor=#FFA12D;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function NeonCarrot(props: DiagramNodeProps) {
  return <Shape {...NEON_CARROT} {...props} />
}
