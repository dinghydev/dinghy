import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CDN_PROFILES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Content_Delivery_Network.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 23,
}

export function CdnProfiles(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CDN_PROFILES)} />
}
