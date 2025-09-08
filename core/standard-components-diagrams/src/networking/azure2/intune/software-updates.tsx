import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOFTWARE_UPDATES = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Software_Updates.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 60,
}

export function SoftwareUpdates(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTWARE_UPDATES}
      {...props}
      _style={extendStyle(SOFTWARE_UPDATES, props)}
    />
  )
}
