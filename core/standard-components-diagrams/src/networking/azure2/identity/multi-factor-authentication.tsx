import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MULTI_FACTOR_AUTHENTICATION = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Multi_Factor_Authentication.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
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
