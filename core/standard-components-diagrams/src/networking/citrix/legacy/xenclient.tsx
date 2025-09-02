import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const XENCLIENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.xenclient;',
  },
  _original_width: 91,
  _original_height: 77,
}

export function Xenclient(props: DiagramNodeProps) {
  return (
    <Shape {...XENCLIENT} {...props} _style={extendStyle(XENCLIENT, props)} />
  )
}
