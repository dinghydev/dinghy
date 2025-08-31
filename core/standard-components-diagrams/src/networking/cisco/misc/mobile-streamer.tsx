import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MOBILE_STREAMER = {
  _style:
    'shape=mxgraph.cisco.misc.mobile_streamer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 104,
  _height: 70,
}

export function MobileStreamer(props: DiagramNodeProps) {
  return (
    <Shape
      {...MOBILE_STREAMER}
      {...props}
      _style={extendStyle(MOBILE_STREAMER, props)}
    />
  )
}
