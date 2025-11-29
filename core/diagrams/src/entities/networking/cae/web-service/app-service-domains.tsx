import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const APP_SERVICE_DOMAINS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/CustomDomain.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 42,
}

export function AppServiceDomains(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, APP_SERVICE_DOMAINS)} />
}
