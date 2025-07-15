import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AUTOMANAGED_VM = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/compute/Automanaged_VM.svg;',
  _width: 68,
  _height: 62,
}

export function AutomanagedVm(props: DiagramNodeProps) {
  return <Shape {...AUTOMANAGED_VM} {...props} />
}
