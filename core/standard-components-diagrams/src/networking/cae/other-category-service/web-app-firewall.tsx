import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const WEB_APP_FIREWALL = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Web_App_Firewall.svg;',
  _width: 50,
  _height: 50,
}

export function WebAppFirewall(props: DiagramNodeProps) {
  return <Shape {...WEB_APP_FIREWALL} {...props} />
}
