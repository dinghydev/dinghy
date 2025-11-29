import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const EVERNOTE = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.evernote;fillColor=#D4EF75;gradientColor=#399F1F',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Evernote(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, EVERNOTE)} />
}
