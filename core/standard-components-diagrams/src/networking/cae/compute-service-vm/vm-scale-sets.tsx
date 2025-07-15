import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const VM_SCALE_SETS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Scale_Set.svg;',
  _width: 50,
  _height: 50,
}

export function VmScaleSets(props: DiagramNodeProps) {
  return <Shape {...VM_SCALE_SETS} {...props} />
}
