import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CALLOUT_2 = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.callout;linkText=;textSize=17;textColor=#666666;callDir=NE;callStyle=line;fontSize=17;fontColor=#666666;align=right;verticalAlign=top;strokeColor=#666666;',
  },
  _original_width: 200,
  _original_height: 100,
}

export function Callout2(props: DiagramNodeProps) {
  return (
    <Shape {...CALLOUT_2} {...props} _style={extendStyle(CALLOUT_2, props)} />
  )
}
