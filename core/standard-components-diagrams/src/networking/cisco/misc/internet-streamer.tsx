import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const INTERNET_STREAMER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.internet_streamer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 109,
  _original_height: 74,
}

export function InternetStreamer(props: DiagramNodeProps) {
  return (
    <Shape
      {...INTERNET_STREAMER}
      {...props}
      _style={extendStyle(INTERNET_STREAMER, props)}
    />
  )
}
