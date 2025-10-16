import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FILE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;html=1;verticalAlign=top;strokeWidth=1;align=center;outlineConnect=0;dashed=0;outlineConnect=0;shape=mxgraph.aws3d.file;aspect=fixed;strokeColor=#292929;',
  },
  _width: 30.8,
  _height: 70.6,
}

export function File(props: DiagramNodeProps) {
  return <Shape {...FILE} {...props} _style={extendStyle(FILE, props)} />
}
