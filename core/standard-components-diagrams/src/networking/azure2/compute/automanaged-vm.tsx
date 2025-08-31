import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOMANAGED_VM = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Automanaged_VM.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 62,
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
