import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SECURITY_CENTER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Security_Center.svg;strokeColor=none;',
  },
  _width: 36,
  _height: 50,
}

export function SecurityCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SECURITY_CENTER)} />
}
