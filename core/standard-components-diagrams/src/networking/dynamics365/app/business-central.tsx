import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_CENTRAL = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/BusinessCentral.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function BusinessCentral(props: DiagramNodeProps) {
  return (
    <Shape
      {...BUSINESS_CENTRAL}
      {...props}
      _style={extendStyle(BUSINESS_CENTRAL, props)}
    />
  )
}
