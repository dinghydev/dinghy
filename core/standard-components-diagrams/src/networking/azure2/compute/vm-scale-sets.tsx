import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VM_SCALE_SETS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/VM_Scale_Sets.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
