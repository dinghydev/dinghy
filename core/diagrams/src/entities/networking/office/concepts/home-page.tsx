import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOME_PAGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home_page;',
  },
  _original_width: 53,
  _original_height: 43,
}

export function HomePage(props: NodeProps) {
  return (
    <Shape {...HOME_PAGE} {...props} _style={extendStyle(HOME_PAGE, props)} />
  )
}
