import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const INSTAPAPER = {
  _style: {
    entity:
      'dashed=0;outlineConnect=0;html=1;align=center;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;shape=mxgraph.webicons.instapaper;fillColor=#807E7E;gradientColor=#1B1C1C',
  },
  _original_width: 102.4,
  _original_height: 102.4,
}

export function Instapaper(props: NodeProps) {
  return (
    <Shape {...INSTAPAPER} {...props} _style={extendStyle(INSTAPAPER, props)} />
  )
}
