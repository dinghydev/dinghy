import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const WEBAPPWORDPRESS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/WebAppWordPress.svg;strokeColor=none;',
  },
  _original_width: 49,
  _original_height: 50,
}

export function Webappwordpress(props: DiagramNodeProps) {
  return (
    <Shape
      {...WEBAPPWORDPRESS}
      {...props}
      _style={extendStyle(WEBAPPWORDPRESS, props)}
    />
  )
}
