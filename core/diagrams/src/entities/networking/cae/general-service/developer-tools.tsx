import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DEVELOPER_TOOLS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Developer_Tools.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function DeveloperTools(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DEVELOPER_TOOLS)} />
}
