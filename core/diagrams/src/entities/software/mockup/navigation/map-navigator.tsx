import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MAP_NAVIGATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.mapNavigator;fillColor2=#99ddff;strokeColor2=none;strokeColor3=#ffffff;strokeColor=#999999;',
  },
  _width: 60,
  _height: 100,
}

export function MapNavigator(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MAP_NAVIGATOR)} />
}
