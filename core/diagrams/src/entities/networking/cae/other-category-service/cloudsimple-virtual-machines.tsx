import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUDSIMPLE_VIRTUAL_MACHINES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Virtual_Machines.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 32,
}

export function CloudsimpleVirtualMachines(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CLOUDSIMPLE_VIRTUAL_MACHINES)}
    />
  )
}
