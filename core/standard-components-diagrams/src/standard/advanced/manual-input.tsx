import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUAL_INPUT = {
  _style: 'shape=manualInput;whiteSpace=wrap;html=1;',
  _width: 80,
  _height: 80,
}

export function ManualInput(props: DiagramNodeProps) {
  return <Shape {...MANUAL_INPUT} {...props} />
}
