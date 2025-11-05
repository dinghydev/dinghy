import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HOME_PAGE_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.ios.iHomePageControl;fillColor=#666666;strokeColor=#cccccc;sketch=0;',
  },
  _width: 50,
  _height: 5,
}

export function HomePageControl(props: NodeProps) {
  return (
    <Shape
      {...HOME_PAGE_CONTROL}
      {...props}
      _style={extendStyle(HOME_PAGE_CONTROL, props)}
    />
  )
}
