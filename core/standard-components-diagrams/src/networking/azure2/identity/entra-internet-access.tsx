import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_INTERNET_ACCESS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Entra_Internet_Access.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
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
