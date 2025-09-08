import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const RELOAD = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.reload;',
  },
  _original_width: 24,
  _original_height: 27,
}

export function Reload(props: DiagramNodeProps) {
  return <Shape {...RELOAD} {...props} _style={extendStyle(RELOAD, props)} />
}
