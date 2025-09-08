import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const VM_SCALE_SETS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/VM_Scale_Set.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
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
