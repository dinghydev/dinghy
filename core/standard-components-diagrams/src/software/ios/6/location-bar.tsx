import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const LOCATION_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iLocBar;align=left;spacingLeft=4;spacingBottom=4;fontColor=#ffffff;fontSize=10;barPos=80;pointerPos=bottom;buttonText=5th Street Music Store',
  },
  _width: 155,
  _height: 32.5,
}

export function LocationBar(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOCATION_BAR}
      {...props}
      _style={extendStyle(LOCATION_BAR, props)}
    />
  )
}
