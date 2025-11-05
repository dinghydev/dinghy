import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const STREAMER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.streamer;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 93,
  _height: 64,
}

export function Streamer(props: NodeProps) {
  return (
    <Shape {...STREAMER} {...props} _style={extendStyle(STREAMER, props)} />
  )
}
