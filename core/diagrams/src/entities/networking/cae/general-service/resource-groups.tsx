import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RESOURCE_GROUPS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/ResourceGroup.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 40,
}

export function ResourceGroups(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, RESOURCE_GROUPS)} />
}
