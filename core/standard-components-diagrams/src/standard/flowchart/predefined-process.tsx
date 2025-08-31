import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PREDEFINED_PROCESS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=process;whiteSpace=wrap;rounded=1;size=0.14;arcSize=6;',
  },
  _width: 100,
  _height: 60,
}

export function PredefinedProcess(props: DiagramNodeProps) {
  return (
    <Shape
      {...PREDEFINED_PROCESS}
      {...props}
      _style={extendStyle(PREDEFINED_PROCESS, props)}
    />
  )
}
