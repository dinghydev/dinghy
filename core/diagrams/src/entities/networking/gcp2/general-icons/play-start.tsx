import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PLAY_START = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.play_start',
  },
  _original_width: 100,
  _original_height: 100,
}

export function PlayStart(props: NodeProps) {
  return (
    <Shape {...PLAY_START} {...props} _style={extendStyle(PLAY_START, props)} />
  )
}
