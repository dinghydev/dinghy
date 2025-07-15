import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MANUAL_INPUT = {
  _style:
    'html=1;strokeWidth=2;shape=manualInput;whiteSpace=wrap;rounded=1;size=26;arcSize=11;',
  _width: 100,
  _height: 60,
}

export function ManualInput(props: DiagramNodeProps) {
  return <Shape {...MANUAL_INPUT} {...props} />
}
