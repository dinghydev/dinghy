import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_SCALE_SETS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/VM_Scale_Sets.svg;strokeColor=none;',
  _width: 68,
  _height: 68,
}

export function VmScaleSets(props: DiagramNodeProps) {
  return <Shape {...VM_SCALE_SETS} {...props} />
}
