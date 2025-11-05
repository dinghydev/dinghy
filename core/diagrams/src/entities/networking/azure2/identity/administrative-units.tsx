import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ADMINISTRATIVE_UNITS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Administrative_Units.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function AdministrativeUnits(props: NodeProps) {
  return (
    <Shape
      {...ADMINISTRATIVE_UNITS}
      {...props}
      _style={extendStyle(ADMINISTRATIVE_UNITS, props)}
    />
  )
}
