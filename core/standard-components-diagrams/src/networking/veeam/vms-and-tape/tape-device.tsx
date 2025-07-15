import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const TAPE_DEVICE = {
  _style:
    'shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#4495D1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.2d.tape_device;',
  _width: 105.2,
  _height: 106,
}

export function TapeDevice(props: DiagramNodeProps) {
  return <Shape {...TAPE_DEVICE} {...props} />
}
