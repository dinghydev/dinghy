import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TRUSTEND_COMPUTING = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/security/trustend_computing.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function TrustendComputing(props: DiagramNodeProps) {
  return (
    <Shape
      {...TRUSTEND_COMPUTING}
      {...props}
      _style={extendStyle(TRUSTEND_COMPUTING, props)}
    />
  )
}
