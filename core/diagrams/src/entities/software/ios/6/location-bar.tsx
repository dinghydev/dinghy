import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOCATION_BAR = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=mxgraph.ios.iLocBar;align=left;spacingLeft=4;spacingBottom=4;fontColor=#ffffff;fontSize=10;barPos=80;pointerPos=bottom;buttonText=5th Street Music Store',
  },
  _width: 155,
  _height: 32.5,
}

export function LocationBar(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LOCATION_BAR)} />
}
