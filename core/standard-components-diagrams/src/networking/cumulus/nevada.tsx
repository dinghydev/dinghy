import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const NEVADA = {
  _style: 'fillColor=#515D68;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Nevada(props: DiagramNodeProps) {
  return <Shape {...NEVADA} {...props} />
}
