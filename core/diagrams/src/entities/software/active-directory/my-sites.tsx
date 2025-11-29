import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MY_SITES = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/my_sites.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function MySites(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MY_SITES)} />
}
