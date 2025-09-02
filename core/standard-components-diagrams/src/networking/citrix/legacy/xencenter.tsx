import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENCENTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xencenter;',
  },
  _original_width: 76,
  _original_height: 89,
}

export function Xencenter(props: DiagramNodeProps) {
  return (
    <Shape {...XENCENTER} {...props} _style={extendStyle(XENCENTER, props)} />
  )
}
