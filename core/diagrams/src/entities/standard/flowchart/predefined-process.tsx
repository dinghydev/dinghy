import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PREDEFINED_PROCESS = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=process;whiteSpace=wrap;rounded=1;size=0.14;arcSize=6;',
  },
  _width: 100,
  _height: 60,
}

export function PredefinedProcess(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PREDEFINED_PROCESS)} />
}
