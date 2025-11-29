import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EXTERNAL_IDENTITIES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/identity/External_Identities.svg;strokeColor=none;',
  },
  _original_width: 62.480000000000004,
  _original_height: 68,
}

export function ExternalIdentities(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EXTERNAL_IDENTITIES)} />
}
