import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const HEADER = {
  _style: 'strokeColor=none;fillColor=#d9d9d9;',
  _width: 0,
  _height: 160,
}

export function Header(props: DiagramNodeProps) {
  return <Shape {...HEADER} {...props} />
}
