import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FRAUD_PROTECTION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/dynamics365/FraudProtection.svg;strokeColor=none;',
  },
  _width: 60.12,
  _height: 68,
}

export function FraudProtection(props: DiagramNodeProps) {
  return (
    <Shape
      {...FRAUD_PROTECTION}
      {...props}
      _style={extendStyle(FRAUD_PROTECTION, props)}
    />
  )
}
