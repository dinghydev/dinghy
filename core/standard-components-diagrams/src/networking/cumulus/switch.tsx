import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCH = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/switch.svg;strokeColor=none;',
  },
  _original_width: 96,
  _original_height: 20,
}

export function Switch(props: DiagramNodeProps) {
  return <Shape {...SWITCH} {...props} _style={extendStyle(SWITCH, props)} />
}
