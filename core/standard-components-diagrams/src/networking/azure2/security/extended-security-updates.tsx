import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EXTENDED_SECURITY_UPDATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/ExtendedSecurityUpdates.svg;strokeColor=none;',
  },
  _original_width: 64,
  _original_height: 70,
}

export function ExtendedSecurityUpdates(props: DiagramNodeProps) {
  return (
    <Shape
      {...EXTENDED_SECURITY_UPDATES}
      {...props}
      _style={extendStyle(EXTENDED_SECURITY_UPDATES, props)}
    />
  )
}
