import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WEB_PAGE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.web_page;',
  },
  _width: 50,
  _height: 54,
}

export function WebPage(props: DiagramNodeProps) {
  return (
    <Shape {...WEB_PAGE} {...props} _style={extendStyle(WEB_PAGE, props)} />
  )
}
