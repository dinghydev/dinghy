import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const RACK_VOYAGER = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;fontSize=12;verticalAlign=top;fontColor=#364149;shadow=0;dashed=0;image=img/lib/cumulus/rack_voyager.svg;strokeColor=none;',
  },
  _width: 96,
  _height: 114,
}

export function RackVoyager(props: NodeProps) {
  return (
    <Shape
      {...RACK_VOYAGER}
      {...props}
      _style={extendStyle(RACK_VOYAGER, props)}
    />
  )
}
