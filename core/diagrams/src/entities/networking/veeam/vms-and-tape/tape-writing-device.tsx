import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_WRITING_DEVICE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.tape_writing_device;',
  },
  _width: 82.4,
  _height: 43.6,
}

export function TapeWritingDevice(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TAPE_WRITING_DEVICE)} />
}
