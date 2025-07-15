import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROCESS = {
  _style: 'shape=process;whiteSpace=wrap;html=1;backgroundOutline=1;',
  _width: 120,
  _height: 60,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} />
}
