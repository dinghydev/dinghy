import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET = {
  _style: {
    entity:
      'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;image=img/lib/cumulus/internet.svg;labelPosition=center;verticalLabelPosition=middle;verticalAlign=middle;fontSize=14;fontColor=#36424A;whiteSpace=wrap;strokeColor=none;',
  },
  _original_width: 274,
  _original_height: 98,
}

export function Internet(props: DiagramNodeProps) {
  return (
    <Shape {...INTERNET} {...props} _style={extendStyle(INTERNET, props)} />
  )
}
