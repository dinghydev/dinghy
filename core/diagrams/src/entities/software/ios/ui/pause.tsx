import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PAUSE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;shadow=0;dashed=0;strokeWidth=2;shape=mxgraph.ios7.misc.pause;strokeColor=#0080f0;sketch=0;',
  },
  _original_width: 12,
  _original_height: 12,
}

export function Pause(props: NodeProps) {
  return <Shape {...PAUSE} {...props} _style={extendStyle(PAUSE, props)} />
}
