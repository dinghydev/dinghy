import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_PAGE = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home_page;',
  _width: 53,
  _height: 43,
}

export function HomePage(props: DiagramNodeProps) {
  return (
    <Shape {...HOME_PAGE} {...props} _style={extendStyle(HOME_PAGE, props)} />
  )
}
