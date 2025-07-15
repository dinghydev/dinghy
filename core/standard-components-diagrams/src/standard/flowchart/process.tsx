import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PROCESS = {
  _style:
    'rounded=1;whiteSpace=wrap;html=1;absoluteArcSize=1;arcSize=14;strokeWidth=2;',
  _width: 100,
  _height: 100,
}

export function Process(props: DiagramNodeProps) {
  return <Shape {...PROCESS} {...props} />
}
