import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OPEN_SOURCE_TOOLS = {
  _style:
    'image;aspect=fixed;perimeter=ellipsePerimeter;html=1;align=center;shadow=0;dashed=0;fontColor=#4277BB;labelBackgroundColor=default;fontSize=12;spacingTop=3;image=img/lib/ibm/applications/open_source_tools.svg;strokeColor=none;',
  _width: 60,
  _height: 60,
}

export function OpenSourceTools(props: DiagramNodeProps) {
  return (
    <Shape
      {...OPEN_SOURCE_TOOLS}
      {...props}
      _style={extendStyle(OPEN_SOURCE_TOOLS, props)}
    />
  )
}
