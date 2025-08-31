import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_APP_FIREWALL = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Web_App_Firewall.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function WebAppFirewall(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEB_APP_FIREWALL}
      {...props}
      _style={extendStyle(WEB_APP_FIREWALL, props)}
    />
  )
}
