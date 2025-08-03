import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const MULTIFACTOR_AUTHENTICATION = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/security/Multifactor_Authentication.svg;strokeColor=none;',
  _width: 55.400000000000006,
  _height: 68,
}

export function MultifactorAuthentication(props: DiagramNodeProps) {
  return <Shape {...MULTIFACTOR_AUTHENTICATION} {...props} />
}
