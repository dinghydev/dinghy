import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTIFACTOR_AUTHENTICATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Multifactor_Authentication.svg;strokeColor=none;',
  },
  _original_width: 55.400000000000006,
  _original_height: 68,
}

export function MultifactorAuthentication(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTIFACTOR_AUTHENTICATION}
      {...props}
      _style={extendStyle(MULTIFACTOR_AUTHENTICATION, props)}
    />
  )
}
