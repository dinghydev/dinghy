import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABLET = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.tablet_1;',
  },
  _original_width: 61,
  _original_height: 79,
}

export function Tablet(props: NodeProps) {
  return <Shape {...TABLET} {...props} _style={extendStyle(TABLET, props)} />
}
