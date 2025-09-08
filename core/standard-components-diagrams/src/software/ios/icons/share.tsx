import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SHARE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.share;',
  },
  _original_width: 21,
  _original_height: 28.5,
}

export function Share(props: DiagramNodeProps) {
  return <Shape {...SHARE} {...props} _style={extendStyle(SHARE, props)} />
}
