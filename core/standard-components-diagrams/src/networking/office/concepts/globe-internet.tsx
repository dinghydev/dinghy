import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GLOBE_INTERNET = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.globe_internet;',
  },
  _width: 49,
  _height: 49,
}

export function GlobeInternet(props: DiagramNodeProps) {
  return (
    <Shape
      {...GLOBE_INTERNET}
      {...props}
      _style={extendStyle(GLOBE_INTERNET, props)}
    />
  )
}
