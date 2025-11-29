import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VIRTUAL_MACHINES_CLASSIC = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Virtual_Machines_Classic.svg;strokeColor=none;',
  },
  _original_width: 69,
  _original_height: 64,
}

export function VirtualMachinesClassic(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, VIRTUAL_MACHINES_CLASSIC)} />
  )
}
