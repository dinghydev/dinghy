import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MAP_NAVIGATOR = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;strokeWidth=1;shape=mxgraph.mockup.navigation.mapNavigator;fillColor2=#99ddff;strokeColor2=none;strokeColor3=#ffffff;strokeColor=#999999;',
  },
  _original_width: 60,
  _original_height: 100,
}

export function MapNavigator(props: DiagramNodeProps) {
  return (
    <Shape
      {...MAP_NAVIGATOR}
      {...props}
      _style={extendStyle(MAP_NAVIGATOR, props)}
    />
  )
}
