import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const STORAGE = {
  _style: {
    entity:
      'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.storage;',
  },
  _original_width: 30,
  _original_height: 10.5,
}

export function Storage(props: DiagramNodeProps) {
  return <Shape {...STORAGE} {...props} _style={extendStyle(STORAGE, props)} />
}
