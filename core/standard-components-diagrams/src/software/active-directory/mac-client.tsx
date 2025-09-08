import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAC_CLIENT = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/mac_client.svg;strokeColor=none;',
  },
  _original_width: 47,
  _original_height: 50,
}

export function MacClient(props: DiagramNodeProps) {
  return (
    <Shape {...MAC_CLIENT} {...props} _style={extendStyle(MAC_CLIENT, props)} />
  )
}
