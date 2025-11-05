import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BARE_METAL_INFRASTRUCTURE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Bare_Metal_Infrastructure.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 64,
}

export function BareMetalInfrastructure(props: NodeProps) {
  return (
    <Shape
      {...BARE_METAL_INFRASTRUCTURE}
      {...props}
      _style={extendStyle(BARE_METAL_INFRASTRUCTURE, props)}
    />
  )
}
