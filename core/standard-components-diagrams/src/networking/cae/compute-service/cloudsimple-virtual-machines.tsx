import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CLOUDSIMPLE_VIRTUAL_MACHINES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Virtual_Machines.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 32,
}

export function CloudsimpleVirtualMachines(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUDSIMPLE_VIRTUAL_MACHINES}
      {...props}
      _style={extendStyle(CLOUDSIMPLE_VIRTUAL_MACHINES, props)}
    />
  )
}
