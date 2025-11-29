import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CONTENT = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.file;aspect=fixed;strokeColor=#2d6195;fillColor=#ffffff;',
  },
  _width: 30.8,
  _height: 70.6,
}

export function Content(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CONTENT)} />
}
