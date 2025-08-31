import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ENTRA_IDENTITY = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Entra_Identity.svg;strokeColor=none;',
  },
  _width: 68,
  _height: 60.440000000000005,
}

export function EntraIdentity(props: DiagramNodeProps) {
  return (
    <Shape
      {...ENTRA_IDENTITY}
      {...props}
      _style={extendStyle(ENTRA_IDENTITY, props)}
    />
  )
}
