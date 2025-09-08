import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GAP_2 = {
  _style: {
    entity:
      'html=1;outlineConnect=0;whiteSpace=wrap;fillColor=#FFE0E0;shape=mxgraph.archimate3.gapIcon;',
  },
  _original_width: 55,
  _original_height: 40,
}

export function Gap2(props: DiagramNodeProps) {
  return <Shape {...GAP_2} {...props} _style={extendStyle(GAP_2, props)} />
}
