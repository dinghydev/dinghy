import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESOURCE_EXPLORER = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Resource_Explorer.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 46,
}

export function ResourceExplorer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESOURCE_EXPLORER)} />
}
