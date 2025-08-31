import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PAGE_NAVIGATION = {
  _style:
    'html=1;verticalLabelPosition=bottom;align=center;labelBackgroundColor=#ffffff;verticalAlign=top;strokeWidth=2;strokeColor=#0080F0;shadow=0;dashed=0;shape=mxgraph.ios7.icons.page_navigation;pointerEvents=1',
  _width: 30,
  _height: 4.8,
}

export function PageNavigation(props: DiagramNodeProps) {
  return (
    <Shape
      {...PAGE_NAVIGATION}
      {...props}
      _style={extendStyle(PAGE_NAVIGATION, props)}
    />
  )
}
