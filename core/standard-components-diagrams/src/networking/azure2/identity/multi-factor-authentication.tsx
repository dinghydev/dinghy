import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTI_FACTOR_AUTHENTICATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/Multi_Factor_Authentication.svg;',
  _width: 68,
  _height: 68,
}

export function MultiFactorAuthentication(props: DiagramNodeProps) {
  return <Shape {...MULTI_FACTOR_AUTHENTICATION} {...props} />
}
