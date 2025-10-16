import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const AUTOMANAGED_VM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Automanaged_VM.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function AutomanagedVm(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTOMANAGED_VM}
      {...props}
      _style={extendStyle(AUTOMANAGED_VM, props)}
    />
  )
}
