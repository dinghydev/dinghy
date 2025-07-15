import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const AAD_LICENSES = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/AAD_Licenses.svg;',
  _width: 65.36,
  _height: 68,
}

export function AadLicenses(props: DiagramNodeProps) {
  return <Shape {...AAD_LICENSES} {...props} />
}
