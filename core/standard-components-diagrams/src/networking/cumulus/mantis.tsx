import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANTIS = {
  _style: 'fillColor=#7CCC6C;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function Mantis(props: DiagramNodeProps) {
  return <Shape {...MANTIS} {...props} />
}
