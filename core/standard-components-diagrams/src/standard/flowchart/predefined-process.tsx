import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const PREDEFINED_PROCESS = {
  _style:
    'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=process;whiteSpace=wrap;rounded=1;size=0.14;arcSize=6;',
  _width: 100,
  _height: 60,
}

export function PredefinedProcess(props: DiagramNodeProps) {
  return <Shape {...PREDEFINED_PROCESS} {...props} />
}
