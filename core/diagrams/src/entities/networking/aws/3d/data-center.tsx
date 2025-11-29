import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const DATA_CENTER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.dataCenter;strokeColor=#5E5E5E;aspect=fixed;',
  },
  _width: 123,
  _height: 142,
}

export function DataCenter(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, DATA_CENTER)} />
}
