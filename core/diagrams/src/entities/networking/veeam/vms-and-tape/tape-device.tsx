import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAPE_DEVICE = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape_device;',
  },
  _width: 105.2,
  _height: 106,
}

export function TapeDevice(props: NodeProps) {
  return (
    <Shape
      {...TAPE_DEVICE}
      {...props}
      _style={extendStyle(TAPE_DEVICE, props)}
    />
  )
}
