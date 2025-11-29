import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PAGE_CONTROL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.pageControl;fillColor=#999999;strokeColor=#ddeeff;',
  },
  _width: 100,
  _height: 30,
}

export function PageControl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, PAGE_CONTROL)} />
}
