import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DYNAMICS_365 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/Dynamics365.svg;strokeColor=none;',
  },
  _original_width: 50.12,
  _original_height: 68,
}

export function Dynamics365(props: NodeProps) {
  return (
    <Shape
      {...DYNAMICS_365}
      {...props}
      _style={extendStyle(DYNAMICS_365, props)}
    />
  )
}
