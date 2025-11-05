import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WINDOW = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.window;',
  },
  _original_width: 30,
  _original_height: 30,
}

export function Window(props: NodeProps) {
  return <Shape {...WINDOW} {...props} _style={extendStyle(WINDOW, props)} />
}
