import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MICROPHONE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.devices.microphone;',
  },
  _width: 53,
  _height: 37,
}

export function Microphone(props: NodeProps) {
  return (
    <Shape {...MICROPHONE} {...props} _style={extendStyle(MICROPHONE, props)} />
  )
}
