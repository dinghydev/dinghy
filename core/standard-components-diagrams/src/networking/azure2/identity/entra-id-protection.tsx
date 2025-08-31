import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_ID_PROTECTION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_ID_Protection.svg;strokeColor=none;',
  _width: 68,
  _height: 60.440000000000005,
}

export function EntraIdProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_ID_PROTECTION}
      {...props}
      _style={extendStyle(ENTRA_ID_PROTECTION, props)}
    />
  )
}
