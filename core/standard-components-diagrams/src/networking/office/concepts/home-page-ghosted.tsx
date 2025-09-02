import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_PAGE_GHOSTED = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home_page;fillColor=#CCCBCB;',
  },
  _original_width: 53,
  _original_height: 43,
}

export function HomePageGhosted(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOME_PAGE_GHOSTED}
      {...props}
      _style={extendStyle(HOME_PAGE_GHOSTED, props)}
    />
  )
}
