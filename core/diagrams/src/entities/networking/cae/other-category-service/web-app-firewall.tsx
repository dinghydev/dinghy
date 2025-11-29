import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_APP_FIREWALL = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Web_App_Firewall.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function WebAppFirewall(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, WEB_APP_FIREWALL)} />
}
