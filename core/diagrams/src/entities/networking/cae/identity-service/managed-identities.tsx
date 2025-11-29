import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MANAGED_IDENTITIES = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Managed_Identities.svg;strokeColor=none;',
  },
  _width: 38,
  _height: 50,
}

export function ManagedIdentities(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MANAGED_IDENTITIES)} />
}
