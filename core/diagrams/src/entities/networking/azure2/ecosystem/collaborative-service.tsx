import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COLLABORATIVE_SERVICE = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/azure_ecosystem/Collaborative_Service.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 66.8,
}

export function CollaborativeService(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, COLLABORATIVE_SERVICE)} />
}
