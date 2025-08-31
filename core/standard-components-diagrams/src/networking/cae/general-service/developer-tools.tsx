import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const DEVELOPER_TOOLS = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Developer_Tools.svg;strokeColor=none;',
  },
  _width: 47,
  _height: 50,
}

export function DeveloperTools(props: DiagramNodeProps) {
  return (
    <Shape
      {...DEVELOPER_TOOLS}
      {...props}
      _style={extendStyle(DEVELOPER_TOOLS, props)}
    />
  )
}
