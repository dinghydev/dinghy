import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const BARE_METAL_INFRASTRUCTURE = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Bare_Metal_Infrastructure.svg;',
  _width: 68,
  _height: 64,
}

export function BareMetalInfrastructure(props: DiagramNodeProps) {
  return <Shape {...BARE_METAL_INFRASTRUCTURE} {...props} />
}
