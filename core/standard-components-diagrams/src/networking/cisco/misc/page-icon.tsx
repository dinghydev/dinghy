import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PAGE_ICON = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.page_icon;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 48,
  _original_height: 69,
}

export function PageIcon(props: DiagramNodeProps) {
  return (
    <Shape {...PAGE_ICON} {...props} _style={extendStyle(PAGE_ICON, props)} />
  )
}
