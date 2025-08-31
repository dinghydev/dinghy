import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INTERNET_ALT1 = {
  _style:
    'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.internet_alt1;',
  _width: 60,
  _height: 60,
}

export function InternetAlt1(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_ALT1}
      {...props}
      _style={extendStyle(INTERNET_ALT1, props)}
    />
  )
}
