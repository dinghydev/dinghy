import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPUTE_FLEET = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Compute_Fleet.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function ComputeFleet(props: NodeProps) {
  return (
    <Shape
      {...COMPUTE_FLEET}
      {...props}
      _style={extendStyle(COMPUTE_FLEET, props)}
    />
  )
}
