import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEB_SERVER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;spacingTop=3;image=img/lib/active_directory/web_server.svg;strokeColor=none;',
  },
  _original_width: 40,
  _original_height: 50,
}

export function WebServer(props: NodeProps) {
  return (
    <Shape {...WEB_SERVER} {...props} _style={extendStyle(WEB_SERVER, props)} />
  )
}
