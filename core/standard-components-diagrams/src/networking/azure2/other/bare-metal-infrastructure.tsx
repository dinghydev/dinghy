import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BARE_METAL_INFRASTRUCTURE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Bare_Metal_Infrastructure.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 64,
}

export function BareMetalInfrastructure(props: DiagramNodeProps) {
  return (
    <Shape
      {...BARE_METAL_INFRASTRUCTURE}
      {...props}
      _style={extendStyle(BARE_METAL_INFRASTRUCTURE, props)}
    />
  )
}
