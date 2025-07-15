import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CHASSIS_BARE_METAL_EMPTY = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/chassis_bare_metal_empty.svg;',
  _width: 106,
  _height: 72,
}

export function ChassisBareMetalEmpty(props: DiagramNodeProps) {
  return <Shape {...CHASSIS_BARE_METAL_EMPTY} {...props} />
}
