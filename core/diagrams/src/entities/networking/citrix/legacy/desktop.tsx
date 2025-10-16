import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DESKTOP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.desktop;',
  },
  _original_width: 89,
  _original_height: 98,
}

export function Desktop(props: DiagramNodeProps) {
  return <Shape {...DESKTOP} {...props} _style={extendStyle(DESKTOP, props)} />
}
