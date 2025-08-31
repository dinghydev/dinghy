import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INFORMATION_PROTECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Azure_Information_Protection.svg;strokeColor=none;',
  },
  _width: 51.2,
  _height: 68,
}

export function InformationProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...INFORMATION_PROTECTION}
      {...props}
      _style={extendStyle(INFORMATION_PROTECTION, props)}
    />
  )
}
