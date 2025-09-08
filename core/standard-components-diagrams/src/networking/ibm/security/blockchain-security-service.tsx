import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const BLOCKCHAIN_SECURITY_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/security/blockchain_security_service.svg;strokeColor=none;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function BlockchainSecurityService(props: DiagramNodeProps) {
  return (
    <Shape
      {...BLOCKCHAIN_SECURITY_SERVICE}
      {...props}
      _style={extendStyle(BLOCKCHAIN_SECURITY_SERVICE, props)}
    />
  )
}
