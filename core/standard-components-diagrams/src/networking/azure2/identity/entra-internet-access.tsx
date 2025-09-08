import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ENTRA_INTERNET_ACCESS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Internet_Access.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function EntraInternetAccess(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_INTERNET_ACCESS}
      {...props}
      _style={extendStyle(ENTRA_INTERNET_ACCESS, props)}
    />
  )
}
