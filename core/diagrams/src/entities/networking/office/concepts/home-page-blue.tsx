import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOME_PAGE_BLUE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home_page;fillColor=#2072B8;',
  },
  _original_width: 53,
  _original_height: 43,
}

export function HomePageBlue(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, HOME_PAGE_BLUE)} />
}
