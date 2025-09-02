import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const BUSINESS_CENTRAL = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/BusinessCentral.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
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
