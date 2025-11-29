import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INTERNET = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;image=img/lib/cumulus/internet.svg;labelPosition=center;verticalLabelPosition=middle;verticalAlign=middle;fontSize=14;fontColor=#36424A;whiteSpace=wrap;strokeColor=none;',
  },
  _width: 274,
  _height: 98,
}

export function Internet(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, INTERNET)} />
}
