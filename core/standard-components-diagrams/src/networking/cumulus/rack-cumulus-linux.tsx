import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RACK_CUMULUS_LINUX = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/rack_cumulus_linux.svg;strokeColor=none;',
  },
  _original_width: 96,
  _original_height: 114,
}

export function RackCumulusLinux(props: DiagramNodeProps) {
  return (
    <Shape
      {...RACK_CUMULUS_LINUX}
      {...props}
      _style={extendStyle(RACK_CUMULUS_LINUX, props)}
    />
  )
}
