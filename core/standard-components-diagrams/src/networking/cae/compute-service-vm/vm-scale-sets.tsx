import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_SCALE_SETS = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Scale_Set.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function VmScaleSets(props: DiagramNodeProps) {
  return (
    <Shape
      {...VM_SCALE_SETS}
      {...props}
      _style={extendStyle(VM_SCALE_SETS, props)}
    />
  )
}
