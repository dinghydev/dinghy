import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SECURITY_CENTER = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Security_Center.svg;strokeColor=none;',
  },
  _original_width: 56.00000000000001,
  _original_height: 68,
}

export function SecurityCenter(props: DiagramNodeProps) {
  return (
    <Shape
      {...SECURITY_CENTER}
      {...props}
      _style={extendStyle(SECURITY_CENTER, props)}
    />
  )
}
