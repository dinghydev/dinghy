import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MULTI_FACTOR_AUTHENTICATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Multi_Factor_Authentication.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 68,
}

export function MultiFactorAuthentication(props: DiagramNodeProps) {
  return (
    <Shape
      {...MULTI_FACTOR_AUTHENTICATION}
      {...props}
      _style={extendStyle(MULTI_FACTOR_AUTHENTICATION, props)}
    />
  )
}
