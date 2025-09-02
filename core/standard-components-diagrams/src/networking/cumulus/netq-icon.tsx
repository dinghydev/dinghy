import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NETQ_ICON = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/cumulus_netq_icon.svg;strokeColor=none;',
  },
  _original_width: 96,
  _original_height: 96,
}

export function NetqIcon(props: DiagramNodeProps) {
  return (
    <Shape {...NETQ_ICON} {...props} _style={extendStyle(NETQ_ICON, props)} />
  )
}
