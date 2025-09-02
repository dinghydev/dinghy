import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_PAGE_GREEN = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home_page;fillColor=#7FBA42;',
  },
  _original_width: 53,
  _original_height: 43,
}

export function HomePageGreen(props: DiagramNodeProps) {
  return (
    <Shape
      {...HOME_PAGE_GREEN}
      {...props}
      _style={extendStyle(HOME_PAGE_GREEN, props)}
    />
  )
}
