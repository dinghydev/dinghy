import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const SWITCH = {
  _style: 'shape=switch;whiteSpace=wrap;html=1;',
  _width: 60,
  _height: 60,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} />
}
