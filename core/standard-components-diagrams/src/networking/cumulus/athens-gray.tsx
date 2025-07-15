import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ATHENS_GRAY = {
  _style: 'fillColor=#EAEDF2;strokeColor=none;whiteSpace=wrap;html=1;',
  _width: 50,
  _height: 50,
}

export function AthensGray(props: DiagramNodeProps) {
  return <Shape {...ATHENS_GRAY} {...props} />
}
