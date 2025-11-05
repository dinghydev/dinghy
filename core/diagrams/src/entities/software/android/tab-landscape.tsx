import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TAB_LANDSCAPE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shadow=0;dashed=0;strokeWidth=1;shape=mxgraph.android.tab2;strokeColor=#c0c0c0;direction=north;',
  },
  _width: 686,
  _height: 472,
}

export function TabLandscape(props: NodeProps) {
  return (
    <Shape
      {...TAB_LANDSCAPE}
      {...props}
      _style={extendStyle(TAB_LANDSCAPE, props)}
    />
  )
}
