import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUDSIMPLE_VIRTUAL_MACHINES = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CloudSimple_Virtual_Machines.svg;strokeColor=none;',
  _width: 50,
  _height: 32,
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
