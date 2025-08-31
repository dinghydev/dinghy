import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AKS_AUTOMATIC = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/AKS_Automatic.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function AksAutomatic(props: DiagramNodeProps) {
  return (
    <Shape
      {...AKS_AUTOMATIC}
      {...props}
      _style={extendStyle(AKS_AUTOMATIC, props)}
    />
  )
}
