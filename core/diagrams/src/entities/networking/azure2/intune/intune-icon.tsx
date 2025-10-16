import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTUNE_ICON = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/intune/Intune.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function IntuneIcon(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTUNE_ICON}
      {...props}
      _style={extendStyle(INTUNE_ICON, props)}
    />
  )
}
