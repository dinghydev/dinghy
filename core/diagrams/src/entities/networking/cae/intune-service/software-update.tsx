import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SOFTWARE_UPDATE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Software_Update.svg;strokeColor=none;',
  },
  _original_width: 50,
  _original_height: 45,
}

export function SoftwareUpdate(props: DiagramNodeProps) {
  return (
    <Shape
      {...SOFTWARE_UPDATE}
      {...props}
      _style={extendStyle(SOFTWARE_UPDATE, props)}
    />
  )
}
