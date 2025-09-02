import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const E_CERT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/blockchain/e_cert.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function ECert(props: DiagramNodeProps) {
  return <Shape {...E_CERT} {...props} _style={extendStyle(E_CERT, props)} />
}
