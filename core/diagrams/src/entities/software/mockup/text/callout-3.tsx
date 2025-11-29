import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CALLOUT_3 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=SW;callStyle=line;fontSize=17;fontColor=#666666;align=left;verticalAlign=bottom;strokeColor=#666666;',
  },
  _width: 200,
  _height: 100,
}

export function Callout3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CALLOUT_3)} />
}
